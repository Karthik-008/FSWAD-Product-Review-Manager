import React, { useState } from 'react';
import {Container, Row, Col, Card, Form, Alert, Button, Table} from 'react-bootstrap';
import axios from 'axios';

const ViewAllForm = () => {
    const [productId, setProductId] = useState();
    const [reviews, setReviews] = useState(null);
    const [message, setMessage] = useState();
    const API_URL = 'http://localhost:5000';

    const handleChange = (e) => {
        setProductId(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setReviews(null);
        setMessage('');

        try{
            const response = await axios.get(`${API_URL}/product/${productId}`);
            setReviews(response.data.reviews);
            setMessage(response.data.message);
        }catch(error) {
            console.log(`Error -> ${error}`);
            setMessage(error.response?.data?.message);
        }
    }

    return (
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                <Col md={8} lg={6}>
                    <Card>
                        <Card.Header className='text-center'>
                            Product Reviews
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit} autoComplete='off'>
                                {/* Review ID */}
                                <Form.Group controlId='ProductID' className='mb-3'>
                                    <Form.Label>Product ID</Form.Label>
                                    <Form.Control
                                        type='number'
                                        name='ProductID'
                                        value={productId}
                                        placeholder='Enter Review ID'
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

                            {message && <Alert variant='info'>
                                {message}
                            </Alert>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {reviews &&
            <Table hover responsive striped bordered className='mt-4'>
                <tbody>
                <tr>
                    <th className='text-center' colSpan={4}>
                        {reviews.length > 0 ? `Product ID : ${reviews[0].ProductID}` : 'Product ID: N/A'}
                    </th>
                </tr>
                <tr>
                    <th>ReviewID</th>
                    <th>Customer Name</th>
                    <th>Rating</th>
                    <th>Review</th>
                </tr>

                {reviews.map((review) => (
                    <tr key={review.ReviewID}>
                        <td>{review.ReviewID}</td>
                        <td>{review.CustomerName}</td>
                        <td>{review.Rating}</td>
                        <td>{review.ReviewText}</td>
                    </tr>
                ))}
                </tbody>
            </Table>}

        </Container>
    )
};

export default ViewAllForm;