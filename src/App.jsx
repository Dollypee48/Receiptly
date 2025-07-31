import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ReceiptBuilder from './pages/ReceiptBuilder';
import ReceiptPreviewPage from './pages/ReceiptPreviewPage';
import AboutPage from './pages/AboutPage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/designer" element={<ReceiptBuilder />} />
            <Route path="/preview" element={<ReceiptPreviewPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
