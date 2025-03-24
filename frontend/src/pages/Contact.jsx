import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { toast } from "react-toastify"
import { useNavigate, Link } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const handlebutton = () => {
        if (formData.email == '') {
            toast.error("Please fill all the fields.")
        }
        else if (formData.subject == '') {
            toast.error("Please fill all the fields.")
        }
        else if (formData.message == '') {
            toast.error("Please fill all the fields.")
        }
        // else if()
        else {
            toast.success("Feedback submitted!!");
            setTimeout(() => {
                window.location.reload(true);
            }, 4000);
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true)
        // console.log(formData)
        try {
            const res = await fetch(`${BASE_URL}/auth/sendemail`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const { message } = await res.json()
            if (!res.ok) {
                throw new Error(message)
            }


            setLoading(false)
            toast.success(message)

            navigate('/home')
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error(error)
            setLoading(false)

        }

    }

    return (
        <section>
            <div className="px-4 mx-auto max-w-screen-md">
                <h2 className='heading text-center'>Contact Us</h2>
                <p className="text_para mb-8 lg:mb-16 font-light text-center">
                    Got a technical issue? Want to send feedback about a beta feature? Let us know.
                </p>
                <form action='' className='space-y-8' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className='form__label'>Your Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder='example@gmail.com' className='form__input mt-1' required />
                    </div>
                    <div>
                        <label htmlFor="subject" className='form__label'>Subject</label>
                        <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} placeholder='Let us know how we can help you' className='form__input mt-1' required />
                    </div>
                    <div className='sm:col-span-2'>
                        <label htmlFor="message" className='form__label'>Your message</label>
                        <textarea rows="6" name="message" id="message" value={formData.message} onChange={handleChange} placeholder='Leave a comment' className='form__input mt-1' required />
                    </div>
                    <button onClick={handlebutton} onC className='btn rounded sm:w-fit w-full' type='submit'>Submit</button>
                </form>
            </div>
        </section >
    );
};

export default Contact;
