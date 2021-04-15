import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
const initialState = {
    name: "",
    email: "",
    message: "",
    emailconf: false,
};
const ContactUsForm = () => {
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    };

    const handleChange = e => {
        const newformData = { ...formData, [e.target.name]: e.target.value };
        setFormData(newformData);
    };
    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            <Form.Field required>
                <label>Full Name</label>
                <input
                    placeholder="Full Name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />
            </Form.Field>
            <Form.Field required>
                <label>Email Address</label>
                <input
                    placeholder="Email Address"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
            </Form.Field>
            <Form.TextArea
                label="Your Message"
                required
                name="message"
                onChange={handleChange}
                placeholder="Your message..."
                value={formData.message}
            />
            <Button positive type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ContactUsForm;
