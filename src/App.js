import logo from './Tip Me-1.png';
// Tip Me-1.png
import Form from "./Form"
import './App.css';

import React from 'react'

const App = () => {
  return (
    <div className='app'>
      <img src={logo} className="appLogo" alt="logo"/>
      <Form />
    </div>
  )
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

