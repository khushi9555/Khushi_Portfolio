import React from 'react';
import  ReactDOM from 'react-dom/client';
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)


function circlemouse(){
    window.addEventListener("mousemove" , function(details){
        var circle = document.querySelector("#minicircle");
        circle.style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
        console.log("hello");
    })
}

circlemouse();