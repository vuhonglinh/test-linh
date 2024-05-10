import React, { useCallback, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import AutoInput from './components/AutoInput';
import ProductList from './components/ProductList';
import MouseTracker from './components/MouseTracker';
import Ads from './components/Ads';
import { PositionType } from './components/MouseTracker/MouseTracker';

function App() {
  const [, render1] = useState({})

  const renderAds = useMemo(() => {
    return (value: PositionType) => <Ads  {...value} visible />
  }, [])

  return (
    <div className="App">
      {/* <Welcome /> */}
      {/* <AutoInput /> */}
      {/* <ProductList /> */}
      <div>
        <button onClick={() => render1({})}>Force Render</button>
      </div>
      <MouseTracker render={renderAds} />
      {/* <Ads visible /> */}
    </div>
  );
}

export default App;
