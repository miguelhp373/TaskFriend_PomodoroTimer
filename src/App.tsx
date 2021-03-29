import React from 'react';

import './styles/global.css';
import styles from './styles/interface/index.module.css'

import TopBar from './components/TopBar'
import Timer from './components/Timer'

import {CountdownProvider} from './ContextApi/CountdownContext'

function App() {
  return (
    <div className={styles.containerBody}>
      <TopBar/>
      <CountdownProvider>
        <Timer/>
      </CountdownProvider>
      
    </div>
  );
}

export default App;
