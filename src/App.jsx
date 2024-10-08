import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./app/auth/Login"
import Signup from "./app/auth/Signup"
import Landing from "./app/Landing/Landing"
import { ThemeProvider } from "@emotion/react"
import theme from "../theme"
import Verify from "./app/auth/Verify"
import ProfileApp from "./app/profile/profile"
import PostApp from "./app/post/post"
import CalendarApp from "./app/Calendar/Calendar"
import ResetPassword from "./app/auth/ResetPassword"
import Home from "./app/home/Home"
import Favoris from "./app/Favoris/Favoris"
import Admin from "./app/Admin/Post/Post"
import DashboardChart from "./components/Dashboard/DashboardChart"
import AdminDashboard from "./app/Admin/Post/AdminDashboard"
import Map from "./components/Map/Map"
import List from "../src/app/Admin/UserList/UserList"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-account" element={<Verify />} />
          <Route path="/profile" element={<ProfileApp />} />
          <Route path="/post" element={<PostApp />} />
          <Route path="/calendar" element={<CalendarApp />} />
          <Route path="/list" element={<List />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/map" element={<Map />} />
          <Route path="/dashboard" element={<DashboardChart />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
