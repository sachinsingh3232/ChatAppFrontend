import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import ChatPage from './Pages/ChatPage/ChatPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="chatPage" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
