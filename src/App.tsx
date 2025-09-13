import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AIPartner from '@pages/message'
import Profile from '@pages/menu'
import Management from '@pages/management'
import History from '@pages/history'
import Login from "@pages/login"
import Register from "@pages/register";
import Register2 from "@pages/register/index2.tsx"
import ProfileEdit from "@pages/profiieEdit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AIPartner />} />
        <Route path="/menu" element={<Profile />} />
        <Route path="/management" element={<Management />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/register2" element={<Register2/>} />
        <Route path="/ProfileEdit" element={<ProfileEdit/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App