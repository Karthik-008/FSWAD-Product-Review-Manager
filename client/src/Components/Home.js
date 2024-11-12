import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <Container className='mt-4'>
            <Row className='justify-content-center'>
                <Col md={8} lg={6} className='justify-content-center'>
                    <Card>
                        <Card.Header className='text-center'>
                            Product Review Management System
                        </Card.Header>
                        <Card.Body className='d-grid gap-3 justify-content-center'>
                            <Link to='/submit'>
                                <Button variant='primary' className='w-100'>
                                    Submit Review
                                </Button>
                            </Link>
                            <Link to='/review'>
                                <Button variant='warning' className='w-100'>
                                    Search Review
                                </Button>
                            </Link>
                            <Link to='/view'>
                                <Button variant='warning' className='w-100'>
                                    View Product
                                </Button>
                            </Link>
                            <Link to='/delete'>
                                <Button variant='danger' className='w-100'>
                                    Delete Review
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        // <Container className='mt-4'>
        //     <Row className='justify-content-center'>
        //         <Col md={8} lg={6}>
        //             <Card>
        //                 <Card.Header className='text-center'>
        //                     Product Review Management System
        //                 </Card.Header>
        //                 <Card.Body className='d-grid gap-3'>
        //                     {/* 2x2 Button Grid */}
        //                     <Row className='g-3'>
        //                         <Col xs={6} className='d-flex justify-content-center'>
        //                             <Link to='/submit'>
        //                                 <Button variant='primary' className='w-100'>
        //                                     Submit Review
        //                                 </Button>
        //                             </Link>
        //                         </Col>
        //                         <Col xs={6} className='d-flex justify-content-center'>
        //                             <Link to='/review'>
        //                                 <Button variant='warning' className='w-100'>
        //                                     Search Review
        //                                 </Button>
        //                             </Link>
        //                         </Col>
        //                         <Col xs={6} className='d-flex justify-content-center'>
        //                             <Link to='/view'>
        //                                 <Button variant='warning' className='w-100'>
        //                                     View Product
        //                                 </Button>
        //                             </Link>
        //                         </Col>
        //                         <Col xs={6} className='d-flex justify-content-center'>
        //                             <Link to='/delete'>
        //                                 <Button variant='danger' className='w-100'>
        //                                     Delete Review
        //                                 </Button>
        //                             </Link>
        //                         </Col>
        //                     </Row>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //     </Row>
        // </Container>

    );
};

export default Home;