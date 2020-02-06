import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import ContextStateProvider from './container/Contexts/ContextState';
import Adduser from './component/Adduser/Adduser';
import RouterMain from './container/router';
import AuthContextProvider from './container/Contexts/authContext';


function App() {
  return (
    <div>
      <AuthContextProvider>
          <ContextStateProvider>
            <Header/>
            <Adduser />
            <div className="container">
                <RouterMain />
            </div>
          </ContextStateProvider>
        </AuthContextProvider>
    </div>
  );
}

export default App;
