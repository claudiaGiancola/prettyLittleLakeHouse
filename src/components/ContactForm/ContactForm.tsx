import './ContactForm.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [object, setObject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e : any) => {
        e.preventDefault();

        emailjs
            .sendForm('contact_service', 'contact_form', form.current, {publicKey: JSON.stringify(import.meta.env.VITE_API_KEY)})
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    return (
        <form ref={form} onSubmit={handleSubmit}>
            <label>Your Name
                <input
                    type="text"
                    name="name"
                    value={name || ""}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>Your Email
                <input
                    type="email"
                    name="email"
                    value={email || ""}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>Object
                <input
                    type="text"
                    name="object"
                    value={object || ""}
                    onChange={(e) => setObject(e.target.value)}
                />
            </label>
            <label>Your Message
                <textarea
                    name="message"
                    rows={4}
                    cols={30}
                    value={message || ""}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </label>
            <input type="submit" />
        </form>
    )
}

export default ContactForm;