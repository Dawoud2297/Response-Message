import React, { useState } from 'react'
import { showMessage } from '../utils/showMessage';
import { ToastContainer } from 'react-toastify';
import Positions from './Positions';
import Theme from './Theme';
import Options from './Options';

const types = [
    {
        content: "Success",
        type: "success"
    },
    {
        content: "Error",
        type: "error"
    },
    {
        content: "Info",
        type: "info"
    },
    {
        content: "Warning",
        type: "warning"
    },
]

const Messages = () => {
    const [message, setMessage] = useState("");
    const [type, setType] = useState("success");

    const successMessage = () => {
        const successOptions = {
            theme: 'dark'
        }
        if (message) {
            showMessage(type, message, successOptions)
        } else {
            // alert("Choose Type and write a message")
            showMessage("warning", "Choose Type and write a message")
        }
    }
    const handleTypeChange = (e) => {
        setType(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    console.log(type)

    return (
        <div className='messageControls'>
            {/* <h1>{message}</h1> */}
            <div className='inputs'>
                <input type='text' placeholder='Message Content' value={message} onChange={handleMessageChange} />
                <select value={type} onChange={handleTypeChange}>
                    {
                        types.map(type => (
                            <option key={type.type} value={type.type}>{type.content}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <h3>Position</h3>
                <Positions />
            </div>
            <div>
                <h3>Theme</h3>
                <Theme />
            </div>
            <div>
                <h3>Options</h3>
                <Options />
            </div>
            <button className='btn btn-primary' onClick={successMessage}>Submit</button>
        </div>
    )
}

export default Messages