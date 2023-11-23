import React from 'react'
import useDefaultOptions from '../hooks/useDefaultOptions'
// import { defaultOptions } from '../utils/showMessage';
// const options = {
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
// }
const Options = () => {
    // const [option, setOption] = useState(options)
    // const handleOnChange = (e) => {
    //     const { name } = e.target;
    //     if (name === 'autoClose' && option.autoClose === false) {
    //         setOption({ ...option, autoClose: 5000 })
    //     } else {
    //         setOption({ ...option, [name]: !option[name] })
    //     }
    //     // setOption({ ...option, [name]: !value })
    // }
    // // console.log(autoCloseRef)
    // console.log(option)
    // console.log(option['closeOnClick'])
    const [options, handleOptionsChanges, setAutoCloseInterval] = useDefaultOptions();

    console.log(options)
    return (
        <div className='optionsContainer'>
            <label>
                <input
                    type='checkbox'
                    name='closeOnClick'
                    checked={options.closeOnClick}
                    onChange={handleOptionsChanges}
                />
                <span>Close On Click</span>
            </label>
            <label>
                <input
                    type='checkbox'
                    name='hideProgressBar'
                    checked={options.hideProgressBar}
                    onChange={handleOptionsChanges}
                />
                <span>Hide Progress Bar</span>
            </label>
            <label>
                <input
                    type='checkbox'
                    name='pauseOnHover'
                    checked={options.pauseOnHover}
                    onChange={handleOptionsChanges}
                />
                <span>Pause On Hover</span>
            </label>
            <label>
                <input
                    type='checkbox'
                    name='draggable'
                    checked={options.draggable}
                    onChange={handleOptionsChanges}
                />
                <span>Draggable</span>
            </label>
            <label>
                <input
                    type='checkbox'
                    name='autoClose'
                    checked={options.autoClose === false}
                    onChange={handleOptionsChanges}
                />
                <span>Disable Auto Close</span>
            </label>
            <label>
                <input
                    type='number'
                    disabled={options.autoClose === false}
                    value={options.autoClose}
                    onChange={setAutoCloseInterval}
                />
            </label>
        </div>
    )
}

export default Options