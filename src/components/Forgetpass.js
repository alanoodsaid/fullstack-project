import { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Input, Button, Alert } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ForgetPass() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');

    // Validation
    if (!email || !newPassword || !confirmPassword) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setMessage('Password has been reset successfully!');
      
      // Redirect to login after success
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }, 1500);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 py-5">
      <Row className="w-100">
        <Col md="6" lg="4" className="mx-auto">
          
          <Card className="shadow-sm border-0" style={{  backgroundColor: 'rgba(244, 234, 233, 1)',border: '1px solid #dee2e6'}}>
            <CardBody className="p-4">
              
              {/* Main Heading */}
              <div className="text-center mb-4">
                <h2 className="fw-bold">Reset Password</h2>
                <p className="text-muted mt-2">
                  Enter your email and new password to reset your account.
                </p>
              </div>

              {/* Success Message */}
              {message && (
                <Alert color="success" className="mb-3">
                  {message}
                </Alert>
              )}

              {/* Error Message */}
              {error && (
                <Alert color="danger" className="mb-3">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                
                {/* Email Field */}
                <FormGroup className="mb-3">
                  <label className="form-label fw-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </FormGroup>

                {/* New Password Field */}
                <FormGroup className="mb-3">
                  <label className="form-label fw-medium">New Password</label>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </FormGroup>

                {/* Confirm Password Field */}
                <FormGroup className="mb-4">
                  <label className="form-label fw-medium">Confirm Password</label>
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    disabled={isLoading}
                  />
                </FormGroup>

                {/* Reset Password Button */}
                <div className="d-grid mb-3">
                  <Button 
                    color="primary" 
                  size="lg" 
                  className="py-2 fw-semibold" 
                  type="submit"  
                  style={{backgroundColor: '#F26B1D', border: 'none',fontSize: '1rem'}}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Resetting Password...' : 'Reset Password'}
                  </Button>
                </div>

              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}