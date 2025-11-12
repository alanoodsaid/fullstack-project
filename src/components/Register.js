import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleRegister = (e) => {
    e.preventDefault();
    // Registration logic here
    console.log('Registration attempted with:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 py-5">
      <Row className="w-100">
        <Col md="6" lg="4" className="mx-auto">
          <Card className="shadow-sm border-0" style={{  backgroundColor: 'rgba(244, 234, 233, 1)',border: '1px solid #dee2e6'}}>
            <CardBody className="p-5">
              <div className="text-center mb-4">
                <h1 className="h3 fw-bold text-dark mb-1">Sign Up</h1>
              </div>
              <Form onSubmit={handleRegister}>
                {/* Email Field */}
                <FormGroup className="mb-3">
                  <Label for="email" className="form-label small text-muted mb-2"> Email </Label>
                  
                  <Input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="py-2"
                    required
                  />
                </FormGroup>

                {/* Password Field */}
                <FormGroup className="mb-3">
                  <Label for="password" className="form-label small text-muted mb-2">
                    Password
                  </Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="py-2"
                    required
                  />
                </FormGroup>

                {/* Confirm Password Field */}
                <FormGroup className="mb-4">
                  <Label for="confirmPassword" className="form-label small text-muted mb-2">
                    Confirm Password
                  </Label>
                  <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="py-2"
                    required
                  />
                </FormGroup>

                {/* Register Button */}
                <div className="d-grid mb-3">
                  <Button 
                  color="primary" 
                  size="lg" 
                  className="py-2 fw-semibold" 
                  type="submit"  
                  style={{backgroundColor: '#F26B1D', border: 'none',fontSize: '1rem'}}>
                    Register
                  </Button>
                </div>

                {/* Links Section */}
                <div className="text-center">
                  <div>
                    <Link to="/login" className="text-decoration-none"
                      style={{ color: '#6c757d' }}>
                      Already have an account? Login Here
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