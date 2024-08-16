import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./app/auth/Login"
import Signup from "./app/auth/Signup"
import Landing from "./app/Landing/Landing"
import axios from "axios"
import { ThemeProvider } from "@emotion/react"
import theme from "../theme"
import Verify from "./app/auth/Verify"
import ProfileApp from "./app/profile/profile"

axios.defaults.baseURL = process.env.BACK_API_URL;

function App() {


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-account" element={<Verify />} />
          <Route path="/profile" element={<ProfileApp/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
