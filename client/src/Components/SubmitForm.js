import React, { useState } from 'react';
import {Container, Row, Col, Card, Form, Alert, Button} from 'react-bootstrap';
import axios from 'axios';

const SubmitForm = () => {
    const API_URL = 'http://localhost:5000';

    const [formData, setFormData] = useState({
        'ReviewID': '',
        'ProductID': '',
        'CustomerName': '',
        'Rating': '',
        'ReviewText': ''
    });

    const [message, setMessage] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setMessage('');
        try{
            const response = await axios.post(`${API_URL}/reviews`, formData);
            setMessage(response.data.message);
            setSubmitSuccess(true);
        }catch(error) {
            console.log(`Error submitting form`, error);
            setMessage(error.response?.data?.message);
            setSubmitSuccess(false);
        }
    };

    return (
        <>
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                <Col md={8} lg={6}>
                    <Card>
                        <Card.Header className='text-center'>
                            Submit Review
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit} autoComplete='off'>
                                {/* Review ID */}
                                <Form.Group controlId='ReviewID' className='mb-3'>
                                    <Form.Label>Review ID</Form.Label>
                                    <Form.Control
                                        type='number'
                                        name='ReviewID'
                                        value={formData.ReviewID}
                                        placeholder='Enter Review ID'
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                {/* Product ID */}
                                <Form.Group controlId='ProductID' className='mb-3'>
                                    <Form.Label>Product ID</Form.Label>
                                    <Form.Control
                                        type='number'
                                        name='ProductID'
                                        value={formData.ProductID}
                                        placeholder='Enter Product ID'
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                {/* Customer Name */}
                                <Form.Group controlId='CustomerName' className='mb-3'>
                                    <Form.Label>Customer Name</Form.Label>
                                    <Form.Control
                                        type='text'
                                        name='CustomerName'
                                        value={formData.CustomerName}
                                        placeholder='Enter Customer Name'
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                                {/* Rating */}
                                <Form.Group controlId='Rating' className='mb-3'>
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Select
                                        name='Rating'
                                        value={formData.Rating}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Rating</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Form.Select>
                                </Form.Group>
                                {/* Review */}
                                <Form.Group controlId='ReviewText' className='mb-3'>
                                    <Form.Label>Review</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name='ReviewText'
                                        value={formData.ReviewText}
                                        placeholder='Enter Review'
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <div className='d-grid gap-2'>
                                    <Button variant='primary' type='submit'>
                                        Submit
                                    </Button>
                                </div>
                            </Form>

                            {message && <Alert variant={submitSuccess===true?'success':'danger'}>
                                {message}
                            </Alert>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
};

export default SubmitForm;