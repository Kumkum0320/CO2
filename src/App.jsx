// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout.jsx';
import Login from './Pages/Login.jsx'; // Import Login page
// import ActivityScope from './Pages/ActivityScope.jsx'; // Import UserAccess page
import UserAccess from './Pages/UserAccess.jsx';
// import Navbar from './Components/Navbar.jsx';  // Import Navbar
import Dashboard from './Pages/Dashboard/Table.jsx';  // Import Dashboard component if it's separate

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Dashboard at root path */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard page */}
          <Route path="/login" element={<Login />} /> {/* Login page */}
          <Route path="/user-rights" element={<UserAccess />} /> {/* User access page */}
          {/* <Route path="/activity-scope" element={<ActivityScope />} /> Activity Scope */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
