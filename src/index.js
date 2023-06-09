import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts =  [
  { id: 1, message: '1000-7', Likes: 12 },
  { id: 2, message: 'пофиг на игру', Likes: 666 },
  { id: 3, message: 'щас шмотки сломаю', Likes: 23 },
  { id: 4, message: 'ты в муте', Likes: 36 },
  { id: 5, message: 'go zxc если не позер', Likes: 777 },
]
let dialogs = [
  { id: 1, name: 'Yuron' },
  { id: 2, name: 'Bro' },
  { id: 3, name: 'Lera' },
  { id: 4, name: 'Kamilka' },
  { id: 5, name: 'Sister' },
  { id: 6, name: 'Philip' },
]
let messages = [
  { id: 1, message: 'What is love' },
  { id: 2, message: 'Baby dont heart me' },
  { id: 3, message: 'don heart me' },
  { id: 4, message: 'no mo' },
  { id: 5, message: 'WHAT IS LOOOVE' },
  { id: 6, message: 'BABY DOMT HEART ME' },
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
