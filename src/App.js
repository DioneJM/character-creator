import React from 'react';

import CharacterEditor from './components/CharacterEditor';
import Footer from './components/Footer';

function App() {
    return (
        <div style={{
            isolation: 'isolate'
        }}>
            <CharacterEditor/>
            <Footer/>
        </div>
    );
}

export default App;
