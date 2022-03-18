import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from './Home'
import ProtectedRoute from './ProtectedRoute'
import SecurePage from './SecurePage'

function App() {
  const user = null
  return (
   <Router>
     <Routes>
    {/* Public Routes */}
   <Route exact path="/" element={<Home />} />
   {/* Protected Routes */}
   <Route element={<ProtectedRoute user={user} />}>
   <Route exact path="/secure" element={<SecurePage />} />
    </Route>
    <Route path="*" element={<p>There's nothing here: 404!</p>} />
   </Routes>
   </Router>
  );
}

export default App;
