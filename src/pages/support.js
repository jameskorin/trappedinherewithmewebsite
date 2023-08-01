import React, { useState } from 'react'
import {
    Outer,
    Title,
    Body,
    Link,
    Form
} from '../styledComponents'
import axios from 'axios'

export default function Support() {

    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('unsent');

    const sendEmail =async ()=> {
        if(status === 'sending' || status === 'sent') return null;

        setStatus('sending');
        await axios.post('/api/supportEmail', {
            sender: email,
            content: content
        });
        setStatus('sent');
    }

    return <Outer>
        <Title>Support</Title>
        <Body>
            Do you have a question, concern, comment, ransom note or death threat you would like to send me? 
            Please leave it in the input below with your return email and I will get back to you as quickly as I can!
        </Body>
        <Form onSubmit={e => {
            e.preventDefault();
            sendEmail();
        }}>
            <input disabled={status === 'sending'} 
            required 
            name='email' 
            type='email' 
            placeholder='Email' 
            onChange={e => setEmail(e.target.value)}/>

            <input disabled={status === 'sending'}
            required 
            as='textarea' 
            placeholder='Enter your message here' 
            onChange={e => setContent(e.target.value)}/>

            <button disabled={status === 'sending'}
            type='submit'>
                Submit
            </button>
        </Form>
    </Outer>;
}