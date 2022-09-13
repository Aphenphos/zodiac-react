import React from 'react';
import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="sign-container">
      <span className="name">{props.sign}</span>
      <h1 className="sign-emoji">{props.emoji}</h1>
      <span>{props.dates}</span>
    </div>
  );
}