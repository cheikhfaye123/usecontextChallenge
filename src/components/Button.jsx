import React, { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext';

const Button = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleClick = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button className={`btn btn-${theme}`} onClick={handleClick}>
            Toggle Theme
        </button>
    );
};

export default Button;