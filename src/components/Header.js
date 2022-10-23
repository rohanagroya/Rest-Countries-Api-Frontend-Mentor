import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Header = ({toggleTheme,theme}) => {

  return (
    <header className='header'>
        <div className='header_container'>
            <h2 className='logo'>Where in the world?</h2>
            <div className='switch_mode'>
                {theme=="dark-theme" ? (<DarkModeIcon />) : (<DarkModeOutlinedIcon/>) }
                <h4 onClick={toggleTheme}>{theme=="dark-theme" ? ('Light Mode') : ('Dark Mode') }</h4>
            </div>
        </div>
    </header>
  )
}

export default Header