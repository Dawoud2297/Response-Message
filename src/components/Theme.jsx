import React from 'react'
const themes = [
    {
        theme: 'dark'
    },
    {
        theme: 'light'
    },
    {
        theme: 'colored'
    },
]
const Theme = () => {
    return (
        <div className='themesContainer'>
            {
                themes.map((theme) => (
                    <label key={theme.theme}>
                        <input type='radio' name="theme" />
                        <span>{theme.theme}</span>
                    </label>
                ))
            }
        </div>
    )
}

export default Theme