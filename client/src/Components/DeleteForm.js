import React, { useState } from 'react';
import {Container, Row, Col, Card, Form, Alert, Button, Table, Modal} from 'react-bootstrap';
import axios from 'axios';

const ViewAllForm = () => {
    const [reviewId, setReviewId] = useState();
    const [review, setReview] = useState(null);
    const [message, setMessage] = useState();
    const [showModal, setShowModal] = useState(false);
    const API_URL = 'http://localhost:5000';

    const handleChange = (e) => {
        setReviewId(e.target.value);
    };

    const handleConfirm = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setReview(null);
        setMessage('');

        try{
            const response = await axios.delete(`${API_URL}/reviews/${reviewId}`);
            setReview(response.data.review);
            setMessage(response.data.message);
        }catch(error) {
            console.log(`Error -> ${error}`);
            setMessage(error.response?.data?.message);
        }finally{
            setShowModal(false);
        }
    };

    return (
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                <Col md={8} lg={6}>
                    <Card>
                        <Card.Header className='text-center'>
                            Delete Review
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleConfirm} autoComplete='off'>
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
                <tr>
                    <th className='text-center' colSpan={5}>
                        { `Deleted Review ID : ${review.ReviewID}`}
                    </th>
                </tr>
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

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete review?</Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant='primary' onClick={handleSubmit}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
};

export default ViewAllForm;