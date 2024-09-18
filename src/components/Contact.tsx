// File: ./components/Contact.tsx
import '../styles/Contact.css'

const Contact = () => {
    return (
        <div>

            <div className="contactGrid">
                <a className="contactGridItem" href="mailto:kelly@kellyrs.com" target="_blank" rel="noopener noreferrer">Email</a>
                <a className="contactGridItem" href="https://www.linkedin.com/in/kelly-schroeder/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a className="contactGridItem" href="https://github.com/anubiskhan" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </div>
    );
}

export default Contact;