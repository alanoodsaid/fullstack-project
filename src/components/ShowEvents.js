import { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Badge, CardImg, Modal, ModalHeader, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import images (adjust paths based on your actual image files)


export default function ShowEvents() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Sample events data with images
  // Sample events data with Unsplash image URLs
const events = [
  { 
    id: 1, 
    name: 'Tech Conference 2024', 
    date: '2024-03-15', 
    location: 'New York', 
    status: 'Upcoming',
    attendees: 250,
    description: 'Join us for the largest tech conference of the year featuring keynote speakers and workshops.',
    organizer: 'Tech Events Inc.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    id: 2, 
    name: 'Music Festival', 
    date: '2024-02-20', 
    location: 'Los Angeles', 
    status: 'Active',
    attendees: 5000,
    description: 'Annual music festival with top artists and food vendors.',
    organizer: 'Music Fest Org',
    category: 'Music',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    id: 3, 
    name: 'Business Workshop', 
    date: '2024-01-10', 
    location: 'Chicago', 
    status: 'Completed',
    attendees: 120,
    description: 'Learn business strategies from industry experts.',
    organizer: 'Business Academy',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    id: 4, 
    name: 'Art Exhibition', 
    date: '2024-04-05', 
    location: 'San Francisco', 
    status: 'Upcoming',
    attendees: 180,
    description: 'Contemporary art exhibition featuring local and international artists.',
    organizer: 'Art Gallery Co.',
    category: 'Art',
    image: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    id: 5, 
    name: 'Food & Wine Tasting', 
    date: '2024-03-22', 
    location: 'Napa Valley', 
    status: 'Upcoming',
    attendees: 80,
    description: 'Exquisite food and wine pairing experience with master chefs.',
    organizer: 'Culinary Events',
    category: 'Food & Drink',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  { 
    id: 6, 
    name: 'Charity Run', 
    date: '2024-02-28', 
    location: 'Central Park', 
    status: 'Active',
    attendees: 1200,
    description: '5K charity run to support local community programs.',
    organizer: 'Charity Foundation',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];
  const getStatusBadge = (status) => {
    const colorMap = {
      'Upcoming': 'warning',
      'Active': 'success',
      'Completed': 'secondary'
    };
    return <Badge color={colorMap[status]} className="px-2 py-1">{status}</Badge>;
  };

  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1 className="h3 fw-bold text-dark mb-1">Events</h1>
        
        </Col>
      </Row>

      <Row>
        {events.map((event) => (
          <Col key={event.id} md={6} lg={4} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              {/* Image on card */}
              <CardImg 
                top 
                src={event.image} 
                alt={event.name}
                style={{ 
                  height: '160px', 
                  objectFit: 'cover' 
                }}
              />
              <CardBody className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="card-title fw-bold text-dark mb-0">{event.name}</h5>
                  {getStatusBadge(event.status)}
                </div>
                
                <div className="event-details">
                  <div className="mb-2">
                    <strong className="text-muted">Date:</strong>
                    <span className="ms-2">{event.date}</span>
                  </div>
                  
                  <div className="mb-2">
                    <strong className="text-muted">Location:</strong>
                    <span className="ms-2">{event.location}</span>
                  </div>
                  
                  <div className="mb-2">
                    <strong className="text-muted">Attendees:</strong>
                    <span className="ms-2">{event.attendees.toLocaleString()}</span>
                  </div>
                  
                  <div className="mt-3 pt-3 border-top d-flex justify-content-between align-items-center">
                    <small className="text-muted">Event ID: {event.id}</small>
                    <button 
                      className="btn btn-primary btn-sm"
                      onClick={() => setSelectedEvent(event)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal with Image */}
      <Modal isOpen={selectedEvent !== null} toggle={() => setSelectedEvent(null)} size="lg">
        <ModalHeader toggle={() => setSelectedEvent(null)}>
          {selectedEvent?.name}
        </ModalHeader>
        <ModalBody>
          {selectedEvent && (
            <div className="row">
              {/* Image in modal */}
              <div className="col-md-6 mb-3">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.name}
                  className="img-fluid rounded"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
              </div>
              
              <div className="col-md-6">
                <div className="mb-3">
                  {getStatusBadge(selectedEvent.status)}
                </div>
                <p><strong>Description:</strong></p>
                <p className="mb-3">{selectedEvent.description}</p>
                
                <div className="row">
                  <div className="col-6 mb-2">
                    <strong>Date:</strong><br />
                    {selectedEvent.date}
                  </div>
                  <div className="col-6 mb-2">
                    <strong>Location:</strong><br />
                    {selectedEvent.location}
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-6 mb-2">
                    <strong>Organizer:</strong><br />
                    {selectedEvent.organizer}
                  </div>
                  <div className="col-6 mb-2">
                    <strong>Category:</strong><br />
                    {selectedEvent.category}
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-6 mb-2">
                    <strong>Attendees:</strong><br />
                    {selectedEvent.attendees.toLocaleString()}
                  </div>
                  <div className="col-6 mb-2">
                    <strong>Event ID:</strong><br />
                    {selectedEvent.id}
                  </div>
                </div>
              </div>
            </div>
          )}
        </ModalBody>
      </Modal>
    </Container>
  );
}