import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ShowEvents from './components/ShowEvents';
import ForgetPass from './components/Forgetpass'; // Add this import
import AdminPage from './components/AdminPage';
import Cal from "./components/cal";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/events" element={<ShowEvents />} />
            <Route path="/forgetpass" element={<ForgetPass />} /> {/* Add this route */}
            <Route path="/AdminPage" element={<AdminPage />} />
            <Route path="/calendar" element={<Cal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;