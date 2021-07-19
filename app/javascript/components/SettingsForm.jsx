import React, { useState } from 'react';
import parseINIString from '../parsers/ini_parser';

const SettingsForm = () => {
  const [settings, setSettings] = useState({});

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (theFile) => {
      const parsed = parseINIString(theFile.target.result);
      setSettings(parsed);
    };
    reader.readAsText(file);
  };

  const handleChange = (event) => {
    setSettings(event.target.value);
  };

  return (
    <form>
      <label htmlFor="settings-upload">Settings</label>
      {Object.keys(settings).map(category => {
        return (
          <div>
            <label htmlFor={category}>{category}</label>
            <input type="text" value={category} onChange={handleChange}/>
            <ul>
              {Object.keys(settings[category]).map(settingName => {
                return <li>{settingName}: {settings[category][settingName]}</li>
              })}
            </ul>
          </div>
        )
      })}
    </form>
  )
};

export default SettingsForm;
