import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import SubmitForm from './Components/SubmitForm';
import ViewAllForm from './Components/ViewAllForm';
import SearchReview from './Components/SearchReview';
import DeleteForm from './Components/DeleteForm';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from './Components/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar bg='light' variant='light' expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/' className='border-bottom text-black'>Home</Nav.Link>
              <Nav.Link as={Link} to='/submit' className='border-bottom text-black'>Submit Review</Nav.Link>
              <Nav.Link as={Link} to='/review' className='border-bottom text-black'>Search Review</Nav.Link>
              <Nav.Link as={Link} to='/delete' className='border-bottom text-black'>Delete Review</Nav.Link>
              <Nav.Link as={Link} to='/view' className='border-bottom text-black'>View Product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/submit' element={<SubmitForm/>}/>
        <Route path='/view' element={<ViewAllForm/>}/>
        <Route path='/review' element={<SearchReview/>}/>
        <Route path='/delete' element={<DeleteForm/>}/>
      </Routes>
    </div>
  );
};

export default App;
