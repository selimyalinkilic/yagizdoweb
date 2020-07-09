import React from 'react';
import './ToggleTheme.css';

const ToggleTheme = ({theme}) => {
  return (
    <div className="siteModeContent">
      <span className="siteMode" onClick={theme} />
    </div>
  )
}

export default ToggleTheme;