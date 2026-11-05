import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { QuizPage } from './pages/QuizPage'
import { YearPage } from './pages/YearPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quiz" element={<QuizPage />} />
          <Route path=":year" element={<YearPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
