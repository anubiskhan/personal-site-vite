// File: ./components/Things.tsx
import { useState, useEffect } from 'react';
// import '../styles/Things.css';

const Things = () => {
    const [, setKeySequence] = useState<number[]>([]);
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Key codes for ↑ ↑ ↓ ↓ ← → ← → B A

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            setKeySequence(prevSequence => {
                const newSequence = [...prevSequence, event.keyCode].slice(-konamiCode.length);
                if (newSequence.join('') === konamiCode.join('')) {
                    triggerKonamiAction();
                }
                return newSequence;
            });
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const triggerKonamiAction = () => {
        alert('Konami Code Activated!');
        // You can replace this alert with any action you want to trigger
    };

    return (
        <div>
            <h1>
                Tested 100day 200day report
            </h1>
            <h1>
                Demark report
            </h1>
            <ul>
                <li>
                    SP500
                </li>
                <li>
                    demark 8, 9, and for 2 days after successful 9 but less than 1% move
                </li>
                <li>
                    explain process. which should be:
                    <ul>
                        <li>
                            automated process fetches list from polygon.io
                        </li>
                        <li>
                            runs process to determine demarks
                        </li>
                        <li>
                            write report to the S3 this is in
                        </li>
                    </ul>
                </li>
            </ul>
            <h1>
                Ready-to-go apps
            </h1>
            <ul>
                <li>
                    Dockerized
                </li>
                <li>
                    Terraformed
                </li>
            </ul>
        </div>
    );
}

export default Things;