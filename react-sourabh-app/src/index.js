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
import AppUseRef from './AppUseRef';
import AppUseRefDOMMani from './AppUseRefDOMMani';
import AppUseEffect from './AppUseEffect';
import CleanupFun from './CleanupFun';
import AppUseReducer from './AppUseReducer';
import UseReducerForm from './UseReducerForm';
import PropDrilling from './PropDrilling';
import { CountProvider } from './context/count-context';
import AppUseContext1 from './AppUseContext1';
import AuthWithUseContext from './AuthWithUseContext';
import ThemeWithUseContext from './ThemeWithUseContext';
import PassingDataToSiblingCompWithUseContext from './PassingDataToSiblingCompWithUseContext';
import RoutingReactSPA from './RoutingReactSPA';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth-context';
import UseParams from './UseParams';

const root = ReactDOM.createRoot(document.getElementById('rootElement'));
root.render(
  <React.StrictMode>
    <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RoutingReactSPA />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
  <UseParams/>
    {/* <BrowserRouter><AuthProvider></AuthProvider></BrowserRouter> */}
    {/* <BrowserRouter><RoutingReactSPA/></BrowserRouter> */}
    {/* <PassingDataToSiblingCompWithUseContext/> */}
    {/* <ThemeWithUseContext/> */}
    {/* <AuthWithUseContext/> */}
    {/* <CountProvider>
      <AppUseContext1/>
    </CountProvider> */}
    {/* <PropDrilling/> */}
    {/* <UseReducerForm/> */}
    {/* <AppUseReducer/> */}
    {/* <CleanupFun/> */}
    {/* <AppUseEffect/> */}
    {/* <AppUseRefDOMMani/> */}
    {/* <AppUseRef/> */}
    {/* <AddToCart/> */}
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
