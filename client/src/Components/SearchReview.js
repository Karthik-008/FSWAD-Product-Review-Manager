import React, { useState } from 'react';
import {Container, Row, Col, Card, Form, Alert, Button, Table} from 'react-bootstrap';
import axios from 'axios';

const ViewAllForm = () => {
    const [reviewId, setReviewId] = useState();
    const [review, setReview] = useState(null);
    const [message, setMessage] = useState();
    const API_URL = 'http://localhost:5000';

    const handleChange = (e) => {
        setReviewId(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setReview(null);
        setMessage('');

        try{
            const response = await axios.get(`${API_URL}/reviews/${reviewId}`);
            setReview(response.data.review);
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
                            Search Review
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit} autoComplete='off'>
                                {/* Review ID */}
                                <Form.Group controlId='ReviewID' className='mb-3'>
                                    <Form.Label>Review ID</Form.Label>
                                    <Form.Control
                                        type='number'
                                        name='ReviewID'
                                        value={reviewId}
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

            {review &&
            <Table hover responsive striped bordered className='mt-4'>
                <tbody>
                {/* <tr>
                    <th className='text-center' colSpan={4}>
                        { `Product ID : ${review.ReviewID}`}
                    </th>
                </tr> */}
                <tr>
                    <th>ReviewID</th>
                    <th>ProductID</th>
                    <th>Customer Name</th>
                    <th>Rating</th>
                    <th>Review</th>
                </tr>
                <tr key={review.ReviewID}>
                    <td>{review.ReviewID}</td>
                    <td>{review.ProductID}</td>
                    <td>{review.CustomerName}</td>
                    <td>{review.Rating}</td>
                    <td>{review.ReviewText}</td>
                </tr>
                </tbody>
            </Table>}

        </Container>
    )
};

export default ViewAllForm;