import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"

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

// export default App;


export const App = () => {
  const [responsive, setResponsive] = useState(false)
  return (
      <>
          <header>
              <div className='container flexsb'>
                  <div className='logo '>
                      <img src={logo} alt='logo' data-aos='zoom-in-right' />
                  </div>
                  <div className={responsive ? "hideMenu" : "nav"}>
                      {/* {navlink.map((links, i) => ( */}
                          {/* // <Link to={links.url} key={i} data-aos='zoom-in-left'> */}
                              {/* {links.text} */}
                          {/* </Link> */}
                      {/* ))} */}
                  </div>
                  <button className='toggle' onClick={() => setResponsive(!responsive)}>
                      {/* <Menu className='icon' /> */}
                  </button>
              </div>
          </header>
      </>
  )
}

export default App;
