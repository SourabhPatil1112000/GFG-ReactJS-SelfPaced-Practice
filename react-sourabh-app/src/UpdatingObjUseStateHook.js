import { wait } from '@testing-library/user-event/dist/utils';
import './App.css';
import { useState } from 'react';

// Parent App component
function UpdatingObjUseStateHook() {
  
  const initialState = {
    name: '',
    email: '',
    password: '',
    mobile: '',
    altNumber: ''
  }
  const [form, setForm] = useState(initialState);

  const onNameChange = (e) => {
    setForm({...form, name: e.target.value})
  }

  const onEmailChange = (e) => {
    setForm({...form, email: e.target.value})
  }

  const onPasswordChange = (e) => {
    setForm({...form, password: e.target.value})
  }

  const onContactChange = (e) => {
    setForm({...form, mobile: e.target.value})
  }

  const onAltChange = (e) => {
    setForm({...form, altNumber: e.target.value})
  }

  console.log(form);

  return (
    <>
      <div>
        <label>Name: </label>
        <input onChange={onNameChange} placeholder='Please Enter your Name' />
      </div>
      <div>
        <label>Email: </label>
        <input onChange={onEmailChange} placeholder='Please Enter your Email' />
      </div>
      <div>
        <label>Password: </label>
        <input onChange={onPasswordChange} lplaceholder='Please Enter your Password' />
      </div>
      <div>
        <label>Contact: </label>
        <input onChange={onContactChange} placeholder='Please Enter your Contact' />
      </div>
      <div>
        <label>Alt Number: </label>
        <input onChange={onAltChange} lplaceholder='Please Enter your Alt Number' />
      </div>
    </>
  );
}

export default UpdatingObjUseStateHook;
