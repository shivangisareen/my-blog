import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Button from '@mui/material/Button';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { hslToRgb } from '@mui/system';

const DarkToggle = () => {

    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div>
          <Button
            onClick={e => theme === 'light' ? toggleTheme('dark') : toggleTheme('light')}>
            {theme === 'light' ? <DarkModeIcon fontSize="large" /> : <WbSunnyIcon fontSize="large" style={{color:"yellow"}} /> }
          </Button>
          </div>
        )}
      </ThemeToggler>
    )
  }

  export default DarkToggle;