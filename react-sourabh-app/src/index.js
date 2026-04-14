import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './App';
import reportWebVitals from './reportWebVitals';
import MyApp2 from './App2';
import App3 from './App3';
import App4Resume from './App4Resume';
import AppUseState from './AppUseState';
import AppUseStateP2 from './AppUseStateP2';
import AppUseStateProps from './AppUseStateProps';
import AppUseStatePropsDestructingObject from './AppUseStatePropsDestructingObject';
import UpdatingObjUseStateHook from './UpdatingObjUseStateHook';
import BrandFilterUseState from './BrandFilterUseState';
import AddToCart from './AddToCart';

const root = ReactDOM.createRoot(document.getElementById('rootElement'));
root.render(
  <React.StrictMode>
    <AddToCart/>
    {/* <BrandFilterUseState/> */}
    {/* <UpdatingObjUseStateHook/> */}
    {/* <AppUseStatePropsDestructingObject/> */}
    {/* <AppUseStateProps/> */}
    {/* <AppUseStateP2/> */}
    {/* <AppUseState/> */}
    {/* <App3/> */}
    {/* <App4Resume/> */}
    {/* <MyApp2/> */}
    {/* <MyApp /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
