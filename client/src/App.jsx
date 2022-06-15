import { useEffect, useState } from 'react';
import './App.css';

import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';

// Components
import Home from './views/Home';
import PhoneDetails from './views/PhoneDetails';

function App() {

  const [phones, setPhones] = useState([]);


  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
