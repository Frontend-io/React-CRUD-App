import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import ContextStateProvider from './container/Contexts/ContextState';
import Adduser from './component/Adduser/Adduser';
import RouterMain from './container/router';



function App() {
  return (
    <div>
          <ContextStateProvider>
            <Header/>
            <Adduser />
              <div className="container">
                <RouterMain />
              </div>
          </ContextStateProvider>
    </div>
  );
}

export default App;
