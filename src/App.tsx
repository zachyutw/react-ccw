import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchAssetsList, fetchAssetObject } from './apis/openseaApi';
function App() {
    useEffect(() => {
        fetchAssetsList({ offset: 0 }).then((data) => console.log(data));
        fetchAssetObject({ token_id: '556324' }).then((data) =>
            console.log(data)
        );
    }, []);
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
