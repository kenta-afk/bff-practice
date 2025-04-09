import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostingPage from './pages/PostingPage';
import GreeterPage from './pages/Greeter/GreeterPage';
// import OmikujiPage from './pages/OmikujiPage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/greeter" element={<GreeterPage />} />
        <Route path="/posting" element={<PostingPage />} />
        {/* <Route path="/omikuji" element={<OmikujiPage />} />  */}
      </Routes>
    </>
  )
}

export default App