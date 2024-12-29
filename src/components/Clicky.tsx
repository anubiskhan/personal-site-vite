import { useState, useEffect } from 'react';
import '../styles/Clicky.css';
import { MyColors } from '../myColors';

const Clicky = () => {
    const colorArray = Object.values(MyColors);
    const [bubbles, setBubbles] = useState<{ id: number, x: number, y: number, color: string }[]>([]);
    const [nextId, setNextId] = useState(1);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
            setBubbles(prevBubbles => [
                ...prevBubbles,
                { id: nextId, x: Math.random() * 90, y: Math.random() * 90, color: randomColor as string }
            ]);
            setNextId(prevId => prevId + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [nextId]);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event: React.MouseEvent) => {
        if (isDragging) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            setBubbles(prevBubbles => prevBubbles.filter(bubble => {
                const bubbleX = (bubble.x / 100) * window.innerWidth;
                const bubbleY = (bubble.y / 100) * window.innerHeight;
                const distance = Math.sqrt((mouseX - bubbleX) ** 2 + (mouseY - bubbleY) ** 2);
                console.log(`Mouse: (${mouseX}, ${mouseY}), Bubble: (${bubbleX}, ${bubbleY}), Distance: ${distance}`);
                return distance > 20; // Assuming bubble radius is 20px
            }));
        }
    };

    return (
        <div
            className='main'
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className='frame'>
                {bubbles.map(bubble => (
                    <div
                        key={bubble.id}
                        className='bubble'
                        style={{ left: `${bubble.x}%`, top: `${bubble.y}%`, backgroundColor: bubble.color }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Clicky;
