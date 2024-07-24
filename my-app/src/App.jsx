// import { useState } from "react";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
    const uniqueId = uuidv4();

    return (
        <div>
            <h1>Your Unique ID: {uniqueId}</h1>
        </div>
    );
};

export default App;