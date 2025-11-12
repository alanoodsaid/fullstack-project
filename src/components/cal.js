import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Cal = () => {
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Example events (replace with your backend data if needed)
  const events = [
    { title: "Tech Expo", date: "2025-11-12", description: "Innovation showcase" },
    { title: "AI Workshop", date: "2025-11-13", description: "Hands-on session" },
    { title: "Startup Meetup", date: "2025-11-15", description: "Networking event" },
  ];

  const handleDateClick = (info) => {
    const clickedDate = info.dateStr;
    const eventsOnThatDay = events.filter(e => e.date === clickedDate);
    if (eventsOnThatDay.length > 0) {
      setSelectedEvents(eventsOnThatDay);
      setShowModal(true);
    } else {
      alert("No events on this date.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Event Calendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        height="auto"
      />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Events on Selected Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedEvents.map((event, index) => (
            <div key={index}>
              <h5>{event.title}</h5>
              <p>{event.description}</p>
              <hr />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Cal;
