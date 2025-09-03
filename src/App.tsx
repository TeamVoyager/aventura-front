import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AIPartner from '@pages/message'
import Profile from '@pages/menu'
import Management from '@pages/management'
import History from '@pages/history'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AIPartner />} />
        <Route path="/menu" element={<Profile />} />
        <Route path="/management" element={<Management />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App