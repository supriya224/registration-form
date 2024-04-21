
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.page';
import { Account, Login, Registration } from './components';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
