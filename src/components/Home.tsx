
// File: ./components/Home.tsx
import { useState } from 'react';
import '../styles/Home.css'

const Home = () => {
    const [messageVisible, setMessageVisible] = useState(false);

    const handleMountainClick = () => {
        setMessageVisible(true);
    };
    return (
        <div className='main'>
            <div className='frame'>
                <div className='mountain' onClick={handleMountainClick}></div>
                {messageVisible && <div className='message'>You clicked the mountain!</div>}
            </div>
        </div>
    );
}

export default Home;
