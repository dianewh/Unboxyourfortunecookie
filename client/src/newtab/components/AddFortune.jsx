import React from 'react';
// import styles from './newTab.css';

 const AddFortune = (props) => {
  return (
      <div>
        
        <input
        type="search"
        className="addFortuneBox"
        placeholder="Enter to Add Fortune"
        onChange={props.handleChange}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            props.addFortune();
          }
        }}
      />
      
      </div>
  );
  
}

export default AddFortune;