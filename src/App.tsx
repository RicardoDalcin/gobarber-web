import React from 'react';

import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

import ToastContainer from './components/ToastContainer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <ToastContainer />

    <GlobalStyles />
  </>
);

export default App;
