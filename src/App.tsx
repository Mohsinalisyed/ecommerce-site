import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Home from './views/Home';
import Layout from './utlis/ui_components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Define other nested routes here if needed */}
          <Route path="category" element={<div>Category Page</div>} />
          <Route path="favourite" element={<div>Favourite Page</div>} />
          <Route path="author" element={<div>Author Page</div>} />
          <Route path="settings" element={<div>Settings Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
