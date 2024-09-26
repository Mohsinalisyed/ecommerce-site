import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Home from './views/Home';
import Layout from './utlis/ui_components/Layout';
import ComingSoon from './component/ComingSoon';
import MyCart from './views/MyCart';
import { Container } from './utlis';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="comingsoon" element={<ComingSoon />} />
            <Route path="cart" element={<MyCart />} />
          </Route>
        </Routes>
      </Router>
   </Container>
  );
}

export default App;
