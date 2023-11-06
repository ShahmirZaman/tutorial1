import React, { createContext, createElement } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        [
            <h1>Hello World To React Community!</h1>,
            <p>Render takes only one single element if you want to used multiple JSX you can used div or fragment.</p>,
            <h2>In react v16 or above,it is possible for render to return array of an elements</h2>,
            <p>Instead of div you can used array of an elements</p>,
            <>
            <h3>You can also used react fragment instead of div and array of an elements</h3>
            <p>The best practice is that to used synthetic sugar for react fragment which is releaded in v16.2</p>
            </>,
        ],
);
//Render takes only one single element if you want to used multiple JSX you can used div or fragment.








//This is only be used here for clearing concept of JSX
//From Babel 
// import { jsx as _jsx } from "react/jsx-runtime";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( /*#__PURE__*/_jsx("h1", {
//   children: "Hello World from React Community!"
// }));

//From Pure Javascript
// var h2 = document.createElement("h2");
// h2.innerHTML = "Hello World Using Pure Javascript!";
// document.getElementById('root').appendChild(h2);

