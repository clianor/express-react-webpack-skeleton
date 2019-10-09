import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [hi, setHi] = useState("hello!");

    return (
        <div className="App">
            <h1>{hi}</h1>
            hello
        </div>
    )
};

export default App;