import React from 'react';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {

  render() {
    return(
      <div style={{background: 'red', width:'100vw', height:'100vh'}}>
        {/* <h1 style={{color:'white'}}></h1> */}
          <Router>
          
            <div>
              <nav>
                {/**Links will go here*/}
                <Link to='/'>Home</Link>
                <Link to='/Contact'>Contact</Link>
                <Link to='/About'>About</Link>
              </nav>
            </div>



            <Routes>
              <Route path="/" element={<Home />}>
                <div style={{background: 'Brown', width:'100vw', height:'100vh'}}>
                  <Home/>
                </div>
              </Route>

              <Route path="Contact" element={<Contact />}>
                <div style={{background: 'Orange', width:'100vw', height:'100vh'}}>
                    <Contact/>
                </div>
              </ Route>

              <Route path="About" element={<About />}>
                <div style={{background: 'Tan', width:'100vw', height:'100vh'}}>
                  <About/>
                </div>
              </ Route>

          </ Routes>
        </ Router>
      </div> 
    )
  }
}

export default App;
