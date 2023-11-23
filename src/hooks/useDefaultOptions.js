import { useState } from 'react'
import { defaultOptions } from '../utils/showMessage'

const useDefaultOptions = () => {
    const [options, setOptions] = useState(defaultOptions);

    const handleOptionsChanges = (e) => {
        const { name } = e.target;
        if (name === 'autoClose'
            && (options.autoClose === false)) {
            setOptions({ ...options, autoClose: 5000 })
        } else {
            setOptions({ ...options, [name]: !options[name] })
        }
    }
    const setAutoCloseInterval = (e) => {
        if (options.autoClose !== false) {
        // setOptions({ ...options, autoClose: Number(e.target.value) })
        setOptions({ ...options, autoClose: e.target.value })
        }
    }

    return [options, handleOptionsChanges, setAutoCloseInterval]
}

export default useDefaultOptions