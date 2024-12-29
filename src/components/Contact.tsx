// File: ./components/Contact.tsx
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div>

            <div className="contactGrid">
                <a className="prettyLink" href="mailto:kelly@kellyrs.com" target="_blank" rel="noopener noreferrer">Email</a>
                <a className="prettyLink" href="https://www.linkedin.com/in/kelly-schroeder/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a className="prettyLink" href="https://github.com/anubiskhan" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </div>
    );
}

export default Contact;