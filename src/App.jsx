import { useContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/Auth/Login.jsx';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx';
import { AuthContext } from './context/AuthProvider.jsx';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);
                          
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData?.role || null);
      if (userData?.role === 'employee') {
        setLoggedInUserData(userData?.data || {});
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!userData) {
      alert("User data is not loaded. Please try again.");
      return;
    }

    const admin = userData?.admin?.find((e) => e.email === email && e.password === password);
    if (admin) {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      return;
    }

    const employee = userData?.employees?.find((e) => e.email === email && e.password === password);
    if (employee) {
      setLoggedInUserData(employee);
      setUser('employee');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      return;
    }

    alert("Invalid Credentials");
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser={setUser} /> 
      : user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> 
      : null}
    </>
  );
}

export default App;
