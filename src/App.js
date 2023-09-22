import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from './pages/home';
import SignIn from './pages/auth-sign-in';
import SignUp from './pages/auth-sign-up';

const App = () => {
  return (
    <main className="text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/sign_in" element={<SignIn />} />
        <Route path="/auth/sign_up" element={<SignUp />} />
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;
