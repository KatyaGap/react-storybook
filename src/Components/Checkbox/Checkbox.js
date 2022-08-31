import React from 'react';
const Checkbox = ({ label, onChange, isChecked, id }) => {
  return (
    <label for={id}>
      <input type="checkbox" onChange={onChange} checked={isChecked} id={id}/>
      <span>{label}</span>
    </label>
  );
};
export default Checkbox ;
