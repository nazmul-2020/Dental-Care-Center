import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='w-50 mx-auto d-block'>
            <h2> My Blog</h2>
            <Accordion className=' p-3 rounded shadow-lg ' >
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='text-start'>Difference between authorization and authentication Authentication</Accordion.Header>
                    <Accordion.Body>
                        <h5>Authentication</h5>
                        <li> Authentication verifies who the user is.</li>
                        <li> Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                        <li>Authentication is the first step of a good identity and access management process.</li>
                        <h5>Authorization</h5>
                        <li>Authorization determines what resources a user can access.</li>
                        <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                        <li>Authorization always takes place after authentication.</li>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? what other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made Ul libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Hosting.</li>
                        <li>Google Analytics.</li>
                        <li>Cloud Messaging.</li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;