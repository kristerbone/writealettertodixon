import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import OfficialLetterPage from './pages/OfficialLetterPage'
import MissionUpdatesPage from './pages/MissionUpdatesPage'
import DossierPage from './pages/DossierPage'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<OfficialLetterPage />} />
          <Route path="/mission-updates" element={<MissionUpdatesPage />} />
          <Route path="/signals" element={<Navigate to="/mission-updates" replace />} />
          <Route path="/dossier" element={<DossierPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
