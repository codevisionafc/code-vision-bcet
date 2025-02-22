import React from 'react';
import '../assets/Spinner.css';

function Spinner() {
  return (
    <div className="text-center" id="spinner">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
