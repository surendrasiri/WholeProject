import {BrowserRouter, Routes, Route, RouterProvider} from "react-router-dom"
import SignUp from "./SignUp"
import Login from "./Login"
import Home from "./Home"
import Router from "./Router"

function App() {

  return (
    <>
      <div className="bg-slate-100">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/signup" element = {<SignUp/>}/>
            <Route path="/login" element = {<Login/>}/>
            <Route path="/" element = {<Home/>}/>
          </Routes>
        </BrowserRouter> */}
        <RouterProvider router={Router}/>
      </div>
    </>
  )
}

export default App
