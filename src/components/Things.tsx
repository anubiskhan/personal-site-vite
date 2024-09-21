// File: ./components/Things.tsx
// import '../styles/Things.css'

const Things = () => {
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
                <li>
                    rails/vite
                </li>
            </ul>
        </div>
    );
}

export default Things;