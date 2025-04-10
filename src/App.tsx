import { Route, Routes } from "react-router"
import DashboardPage from "./pages/Dashboard"
import NotFoundPage from "./NotFound"
import LoginPage from "./pages/auth/Login"
import ForgotpasswordPage from "./pages/auth/Forgotpassword"
import ResetPasswordPage from "./pages/auth/ResetPassword"

function App() {
 

  return (
    <>



   <Routes>
    <Route path="/" element={<DashboardPage/>}/>
    <Route path="/auth/login" element={<LoginPage/>}/>
    <Route path="/auth/forgot_password_page" element={<ForgotpasswordPage/>}/>      
    <Route path="/auth/reset_password_page" element={<ResetPasswordPage/>}/>
    <Route path="*" element={<NotFoundPage/>}/>
 </Routes>
    </>
  )
}

export default App
