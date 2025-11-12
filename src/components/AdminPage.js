import { useState } from "react";
import {
  Container,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { FaPlus, FaCalendarAlt } from "react-icons/fa";
import InsertEvent from "./InsertEvent";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate(); // Hook inside component

  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Tech Conference 2024",
      date: "2024-03-15",
      location: "New York",
      status: "Upcoming",
      attendees: 250,
    },
    {
      id: 2,
      name: "Music Festival",
      date: "2024-02-20",
      location: "Los Angeles",
      status: "Active",
      attendees: 5000,
    },
  ]);

  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Delete event
  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  // Open edit modal
  const handleEdit = (event) => {
    setSelectedEvent({ ...event });
    setEditModal(true);
  };

  // Save changes (edit)
  const handleSave = () => {
    setEvents(
      events.map((ev) => (ev.id === selectedEvent.id ? selectedEvent : ev))
    );
    setEditModal(false);
  };

  // Add new event (from InsertEvent)
  const handleAddEvent = (newEvent) => {
    const id = events.length ? events[events.length - 1].id + 1 : 1;
    setEvents([...events, { ...newEvent, id }]);
    setAddModal(false);
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-dark">Admin Panel - Manage Events</h2>
        <div className="d-flex gap-2">
          <Button
            color="success"
            onClick={() => setAddModal(true)}
            className="d-flex align-items-center gap-2"
          >
            <FaPlus /> Add Event
          </Button>
          <Button
            className="btn btn-outline-primary"
            onClick={() => navigate("/calendar")}
          >
            <FaCalendarAlt /> Calendar
          </Button>
        </div>
      </div>

      <Table striped bordered hover responsive className="align-middle shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Status</th>
            <th>Attendees</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.location}</td>
              <td>{event.status}</td>
              <td>{event.attendees}</td>
              <td>
                <Button
                  color="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(event)}
                >
                  Edit
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => handleDelete(event.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Event Modal */}
      <Modal isOpen={editModal} toggle={() => setEditModal(false)}>
        <ModalHeader toggle={() => setEditModal(false)}>Edit Event</ModalHeader>
        <ModalBody>
          {selectedEvent && (
            <Form>
              <FormGroup>
                <Label for="name">Event Name</Label>
                <Input
                  id="name"
                  value={selectedEvent.name}
                  onChange={(e) =>
                    setSelectedEvent({ ...selectedEvent, name: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={selectedEvent.date}
                  onChange={(e) =>
                    setSelectedEvent({ ...selectedEvent, date: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="location">Location</Label>
                <Input
                  id="location"
                  value={selectedEvent.location}
                  onChange={(e) =>
                    setSelectedEvent({
                      ...selectedEvent,
                      location: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="status">Status</Label>
                <Input
                  id="status"
                  type="select"
                  value={selectedEvent.status}
                  onChange={(e) =>
                    setSelectedEvent({
                      ...selectedEvent,
                      status: e.target.value,
                    })
                  }
                >
                  <option>Upcoming</option>
                  <option>Active</option>
                  <option>Completed</option>
                </Input>
              </FormGroup>
            </Form>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button color="secondary" onClick={() => setEditModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* Add Event Modal */}
      <Modal isOpen={addModal} toggle={() => setAddModal(false)}>
        <ModalHeader toggle={() => setAddModal(false)}>Add New Event</ModalHeader>
        <ModalBody>
          <InsertEvent onAdd={handleAddEvent} />
        </ModalBody>
      </Modal>
    </Container>
  );
}

