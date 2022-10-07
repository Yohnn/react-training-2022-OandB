import {BrowserRouter,
    Routes,
    Route,
    NavLink} from "react-router-dom";
  
  function AppTwo() {
    return(
        <div>
          <BrowserRouter>
            <nav className="navbar">
              <NavLink to="">Home</NavLink>
              <NavLink to="one">One</NavLink>
              <NavLink to="two">Two</NavLink>
              <NavLink to="three">Three</NavLink>
            </nav>
            <h1>Home Page</h1>
            <Routes>
              <Route path="/one" element={<One/>}/>
              <Route path="/two" element={<Two/>}/>
              <Route path="/three" element={<Three/>}/>
            </Routes>
          </BrowserRouter>
        </div>
    )
  }
  
  function One() {
    return(
        <div>
          <h2>One</h2>
        </div>
    )
  }
  
  function Two() {
    return(
        <div>
          <h2>Two</h2>
        </div>
    )
  }
  
  function Three() {
    return(
        <div>
          <h2>Three</h2>
        </div>
    )
  }
  
  export default AppTwo;
  