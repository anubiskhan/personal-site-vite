import { useState, useEffect } from 'react';
import '../styles/Clicky.css';
import { Colors } from '../colors';

const Clicky = () => {
    const colorArray = Object.values(Colors);
    const [bubbles, setBubbles] = useState<{ id: number, x: number, y: number, color: string }[]>([]);
    const [nextId, setNextId] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
            setBubbles(prevBubbles => [
                ...prevBubbles,
                { id: nextId, x: Math.random() * 90, y: Math.random() * 90, color: randomColor }
            ]);
            setNextId(prevId => prevId + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [nextId]);

    const handleBubbleClick = (id: number) => {
        setBubbles(prevBubbles => prevBubbles.filter(bubble => bubble.id !== id));
    };

    return (
        <div className='main'>
            <div className='frame'>
                {bubbles.map(bubble => (
                    <div
                        key={bubble.id}
                        className='bubble'
                        style={{ left: `${bubble.x}%`, top: `${bubble.y}%`, backgroundColor: bubble.color }}
                        onClick={() => handleBubbleClick(bubble.id)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Clicky;
