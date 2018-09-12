import React from 'react';
// import styles from './newTab.css';

 const FortuneCookie = (props) => {
  return (
      <div className="container">
        <img className="cookiepicture" src={props.cookieImg}></img>
        {props.currentFortune}
      </div>
  );
  
}

export default FortuneCookie;