import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let PostData = [{id:1,message:"I am also fine, thx for u care",like:12},
    {id:2,message:"How are you?",like:123},
    {id:3,message:"No proplem bro",like:34},
    {id:3,message:"yo",like:1532},
    {id:3,message:"yo",like:154}
]

let DialogData = [{id:1,name:"Mam"},
    {id:2,name:"Ravil"},
    {id:3,name:"Efrem"},
    {id:4,name:"Erik"},
    {id:5,name:"Lena"},
]

let MessagesData = [{id:1,message:"Hi"},
    {id:2,message:"How are you?"},
    {id:3,message:"Oh I'm okey"},
    {id:3,message:"yo"},
    {id:3,message:"yo"}
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App post_datas = {PostData} message_datas = {MessagesData} dialog_datas = {DialogData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
