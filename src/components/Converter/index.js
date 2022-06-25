import React, { useState } from 'react';

function Converter() {
  const texts = {
    error: 'Error! Wrong format. Should look like #12ff12',
    placeholder: 'Type HEX to convert into RGB',
  };
  const [rgb, setRGB] = useState('');

  function handleRgb(bacgroundColor) {
    const red = parseInt(bacgroundColor[1] + bacgroundColor[2], 16);
    const green = parseInt(bacgroundColor[3] + bacgroundColor[4], 16);
    const blue = parseInt(bacgroundColor[5] + bacgroundColor[6], 16);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  const handleChange = ({ target }) => {
    if (target.value.length === 7) {
      const regex = new RegExp(/#(([0-9a-fA-F]{2}){3,4}|([0-9a-fA-F]){3,4})/g);

      if (regex.test(target.value)) {
        setRGB(handleRgb(target.value));
      } else {
        setRGB(texts.error);
      }
    }
  };
  return (
    <div
      className="converter"
      style={{ backgroundColor: rgb === texts.error ? '#ff2c2c' : rgb }}
    >
      <form>
        <label className="input" htmlFor="color">
          HEX:
          <input
            className="input-box"
            id="color"
            name="date"
            placeholder="#9921ff"
            minLength="7"
            maxLength="7"
            required
            autoFocus
            onChange={handleChange}
          />
        </label>
      </form>
      <div className="output">
        RGB:
        <div
          className="output-box"
          style={{
            backgroundColor: rgb === texts.error ? '#c30010' : '#ffffff',
          }}
        >
          {rgb ? rgb : texts.placeholder}
        </div>
      </div>
    </div>
  );
}

export default Converter;
