import React from 'react';
import { signs } from '../../data.js';
import './Main.css';
import Zodiac from '../Zodiac/Zodiac.js';


export default function Main() {
  return (
    <main style={{ backgroundImage: "url('https://i.imgur.com/tREoxlU.jpeg')" }}>
      {signs.map((item) => (
        <Zodiac key={item.sign} {...item}/>
      ))}
    </main>
  );
}