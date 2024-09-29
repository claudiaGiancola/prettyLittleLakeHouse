// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contacts = () => {
    console.log(JSON.stringify(import.meta.env.VITE_API_KEY));

    return (
        <>
        <ContactForm/>

        {/* <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form> */}
        </>
    );
};

export default Contacts;