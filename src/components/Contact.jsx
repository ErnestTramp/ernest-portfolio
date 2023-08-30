import './Contact.css'
import ContactForm from './ContactForm';

export default function About() {
    return <div className="centerDiv-4">
      <div className="contactWrapper">
        <h2>You have an <span style={{ color: "aqua" }}>idea</span>? Let's <span style={{ color: "brown" }}>team</span> up.</h2>
        <p>Enough about me, I would love to hear your ideas on how we will work perfectly together</p>
        <ContactForm />
      </div>
    </div>
}