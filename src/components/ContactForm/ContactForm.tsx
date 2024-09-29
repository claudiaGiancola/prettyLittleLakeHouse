import './ContactForm.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {

    const form = useRef(null);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (form.current == null) {
            return
        }

        emailjs
            .sendForm('contact_service', 'contact_form', form.current, import.meta.env.VITE_API_KEY)
            .then(
                () => {
                    alert("Email sent successfully");
                },
                (error) => {
                    alert(`${error.message}`);
                },
            );
    }

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <label>Your Name
                <input
                    type="text"
                    name="name"
                />
            </label>
            <label>Your Email
                <input
                    type="email"
                    name="email"
                />
            </label>
            <label>Object
                <input
                    type="text"
                    name="object"
                />
            </label>
            <label>Your Message
                <textarea
                    name="message"
                    rows={4}
                    cols={30}
                ></textarea>
            </label>
            <input type="submit" />
        </form>
    )
}

export default ContactForm;