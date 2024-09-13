import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CardPage from './Pages/CardPage'
export default function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<CardPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
