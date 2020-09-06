import React from 'react';

import GlobalStyles from './styles/global';

import { AuthProvider } from './context/AuthContext';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyles />
  </>
);

export default App;
