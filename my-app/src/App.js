import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      "Hello World, My name is Kimia and I am a HUGE Harry Potter fan.
      While the world is in quarantine and struggeling with boredom, my suggestion to you
      is to read/watch the the Harry Potter series if you haven't done so. If you have, do it again with more attention to hidden details.
     whatever you do: STAY HOME AND STAY SAFE."
        <img src="https://cdn.onebauer.media/one/empire-tmdb/films/675/images/gGt4ePOhD8ilxd3FYhKB06L2CyG.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg" className="App-logo" alt="logo" />
        <p>
          Learn more about this series at:
        </p>
        <a
          className="App-link"
          href="https://www.wizardingworld.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Wizarding World
        </a>
      </header>
    </div>
  );
}

export default App;
