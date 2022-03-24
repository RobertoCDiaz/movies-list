import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import MoviePage from './components/MoviePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
