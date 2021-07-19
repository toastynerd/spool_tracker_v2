import React, { useState } from 'react';
import parseINIString from '../parsers/ini_parser';

const SettingsForm = () => {
  const [formData, setFormData] = useState({
    settings: {},
    rfid: "",
    printFile: "",
    notes: ""
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (theFile) => {
      const parsed = parseINIString(theFile.target.result);
      setFormData(prevFormData => {
        return {
          ...formData,
          settings: parsed
        };
      });
    };
    reader.readAsText(file);
  };

  const handleChange = (event) => {
    setFormData(prevFormData => {
      return {
        ...formData,
        [event.target.name]: event.target.value
      };
    });
  };

  return (
    <form>
      <label htmlFor="settings-upload">Settings</label>
      <input type="file" onChange={handleFileChange} />

      <label htmlFor="rfid">RFID</label>
      <input type="text" name="rfid" value={formData.rfid} onChange={handleChange} />

      <label htmlFor="print-file">Print File</label>
      <input type="text" name="printFile" value={formData.printFile} onChange={handleChange} />

      <label htmlFor="notes">Notes</label>
      <textarea name="notes" value={formData.notes} onChange={handleChange}/>

      <button type="submit">Submit Print Data</button>

      {Object.keys(formData.settings).map(category => {
        return (
          <div key={category}>
            <h2>{ category }</h2>
            <ul>
              {Object.keys(formData.settings[category]).map(settingName => {
                return <li key={settingName}>{settingName}: {formData.settings[category][settingName]}</li>
              })}
            </ul>
          </div>
        )
      })}
    </form>
  )
};

export default SettingsForm;
