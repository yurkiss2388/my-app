import React, { component } from 'react';
import './App.css';

const App = () => {
  return (
    <div >
      < Header />
      <Technologies />
    </div>
  );
}
const Technologies = () => {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  )
}
const Header = () => {
  return (<div>
    <a href='#s'>home</a>
    <a href='#s'>News feed</a>
    <a href='#s'>messages</a>

  </div>)
}

export default App;
