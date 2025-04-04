import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostingPage from './pages/PostingPage';
import GreeterPage from './pages/GreeterPage';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/greeter" element={<GreeterPage />} />
        <Route path="/posting" element={<PostingPage />} />
      </Routes>
    </>
  )
}

export default App