import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function InsertEvent({ onAdd }) {
  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
    status: "Upcoming",
    attendees: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAdd) {
      onAdd(newEvent);
    }
    setNewEvent({
      name: "",
      date: "",
      location: "",
      status: "Upcoming",
      attendees: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Event Name</Label>
        <Input
          id="name"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          id="location"
          value={newEvent.location}
          onChange={(e) =>
            setNewEvent({ ...newEvent, location: e.target.value })
          }
          required
        />
      </FormGroup>

      <FormGroup>
        <Label for="status">Status</Label>
        <Input
          id="status"
          type="select"
          value={newEvent.status}
          onChange={(e) =>
            setNewEvent({ ...newEvent, status: e.target.value })
          }
        >
          <option>Upcoming</option>
          <option>Active</option>
          <option>Completed</option>
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="attendees">Attendees</Label>
        <Input
          id="attendees"
          type="number"
          value={newEvent.attendees}
          onChange={(e) =>
            setNewEvent({ ...newEvent, attendees: e.target.value })
          }
          required
        />
      </FormGroup>

      <Button color="success" type="submit">
        Add Event
      </Button>
    </Form>
  );
}
