
// import "../src/App.css"



// import { useEffect, useState } from 'react';
// import './App.css';
// import NavBar from './NavBar';
// import Login from './authentication/Login';
// import SignUp from './authentication/SignUp';
// import Customer from './customer';

// import React from 'react'

// function App() {
//   const [user , setUser] = useState('');
//   const [toggleForm, setToggleForm] =  useState(true);
//   const formMode = () => {
//     setToggleForm(!toggleForm);
//   }
//   const userState = () => {
//     const data = localStorage.getItem('user');
//     const us = data !== null ? JSON.parse(data) : null;
//     setUser(us);
//   }

//   useEffect(() => {
//     userState();
//   }, []);
  
// }
// const LoginSignup = () => {
//   return (
//     <>
//       {user !== null ? (
//         <>
//         <NavBar setUserState={() => setUser(null)}/>
//         <Customer/>
//         </>
//       ) : (
//          <>
//          {toggleForm ? (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>) 
//          : ( <SignUp toggle={() => formMode()}/>)}
        
//      </>
//       )} 
//     </>
//   )
// }

// export default LoginSignup





