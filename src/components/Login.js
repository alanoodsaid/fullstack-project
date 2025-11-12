import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Button } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Add this hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    // Login logic here
    console.log('Login attempted with:', { email, password });
    
    // After login logic, navigate to ShowEvents page
    navigate('/events'); // Add this line to redirect
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 py-5">
      <Row className="w-100">
        <Col md="6" lg="4" className="mx-auto">
          
          {/* Card Container with matching image color */}
          <Card className="shadow" style={{ 
            backgroundColor: 'rgba(244, 234, 233, 1)', 
            border: '1px solid #dee2e6'
          }}>
            <CardBody className="p-5">
              
              {/* Main Heading - Exact match to image */}
              <div className="text-center mb-4">
                <h1 className="fw-bold mb-3" style={{ 
                  fontSize: '2rem',
                  color: '#000'
                }}>
                  Sign In
                </h1>
              </div>

              <Form onSubmit={handleLogin}>
                
                {/* Email Field */}
                <FormGroup className="mb-4">
                  <div className="mb-2 fw-medium" style={{ color: '#000' }}>
                    Email
                  </div>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-2"
                    style={{ 
                      border: '1px solid #ced4da',
                      backgroundColor: '#fff'
                    }}
                    required
                  />
                </FormGroup>

                {/* Password Field */}
                <FormGroup className="mb-4">
                  <div className="mb-2 fw-medium" style={{ color: '#000' }}>
                    Password
                  </div>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="py-2"
                    style={{ 
                      border: '1px solid #ced4da',
                      backgroundColor: '#fff'
                    }}
                    required
                  />
                </FormGroup>

                {/* Login Button */}
                <div className="d-grid mb-4">
                  <Button 
                    type="submit" // Make sure it's type="submit"
                    className="py-2 fw-semibold"
                    style={{ 
                      backgroundColor: '#F26B1D',
                      border: 'none',
                      fontSize: '1rem'
                    }}
                  >
                    Login
                  </Button>
                </div>

                {/* Links Section */}
                <div className="text-center">
                  <div className="mb-2">
                    <Link 
                      to="/forgetpass" 
                      className="text-decoration-none"
                      style={{ color: '#6c757d' }}
                    >
                      Forget Password
                    </Link>
                  </div>
                  <div>
                    <Link 
                      to="/register" 
                      className="text-decoration-none"
                      style={{ color: '#6c757d' }}
                    >
                      Register Here
                    </Link>
                  </div>
                </div>

              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}