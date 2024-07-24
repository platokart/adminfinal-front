// ConsultantDetails.js
import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import moment from "moment";
import {
  ProgressBar,
  Button,
  Form,
  ListGroup,
  Modal,
  Table,
  Container,
  Row,
  Col,
  Card
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Timeline from './Timeline';

// const Timeline = () => {
//   const timelineData = [
//     {
//       date: 'June 18th, 2024',
//       title: 'Project Kickoff',
//       description: 'Initial project kickoff meeting with all stakeholders.',
//     },
//     {
//       date: 'June 23rd, 2024',
//       title: 'Requirement Gathering',
//       description: 'Gathering all necessary requirements from the client.',
//     },
//     {
//       date: 'July 3rd, 2024',
//       title: 'Design Phase',
//       description: 'Starting the design phase of the project.',
//     },
//   ];
//   return (
//     <Container className="timeline">
//       <h2 className="text-center mb-4">Project Timeline</h2>
//       {timelineData.map((item, index) => (
//         <Row key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
//           <Col md={{ span: 5, offset: index % 2 === 0 ? 0 : 7 }}>
//             <Card className="timeline-card">
//               <Card.Body>
//                 <Card.Title>{item.title}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
//                 <Card.Text>{item.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       ))}
//     </Container>
//   );
// };



const Deliverables = () => {
  const [deliverables, setDeliverables] = useState([
    { id: 1, name: "Requirement Document", completed: true },
    { id: 2, name: "Design Document", completed: false },
    { id: 3, name: "Implementation Plan", completed: false },
    { id: 4, name: "Testing Report", completed: false },
  ]);

  const [newDeliverable, setNewDeliverable] = useState("");

  const handleAddDeliverable = () => {
    setDeliverables([
      ...deliverables,
      { id: deliverables.length + 1, name: newDeliverable, completed: false },
    ]);
    setNewDeliverable("");
  };

  const handleToggleCompletion = (id) => {
    setDeliverables(
      deliverables.map((deliverable) =>
        deliverable.id === id
          ? { ...deliverable, completed: !deliverable.completed }
          : deliverable
      )
    );
  };

  const completedCount = deliverables.filter((d) => d.completed).length;
  const completionPercentage = (completedCount / deliverables.length) * 100;

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Project Deliverables</h3>
      <ProgressBar
        now={completionPercentage}
        label={`${completionPercentage.toFixed(0)}%`}
        className="mb-4"
      />
      <ul className="list-group">
        {deliverables.map((deliverable) => (
          <li
            key={deliverable.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              deliverable.completed ? "list-group-item-success" : ""
            }`}
          >
            {deliverable.name}
            <Button
              variant={deliverable.completed ? "danger" : "success"}
              onClick={() => handleToggleCompletion(deliverable.id)}
            >
              {deliverable.completed ? "Mark Incomplete" : "Mark Complete"}
            </Button>
          </li>
        ))}
      </ul>
      <Form className="mt-4">
        <Form.Group controlId="formNewDeliverable">
          <Form.Label>New Deliverable</Form.Label>
          <Form.Control
            type="text"
            value={newDeliverable}
            onChange={(e) => setNewDeliverable(e.target.value)}
            placeholder="Enter new Deliverable"
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleAddDeliverable}
          className="m-3"
        >
          Add Deliverable
        </Button>
      </Form>
    </div>
  );
};

const CommunicationHistory = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Client",
      text: "Initial project discussion.",
      timestamp: new Date().toLocaleString(),
      attachments: [],
    },
    {
      id: 2,
      sender: "Consultant",
      text: "Shared the requirement document.",
      timestamp: new Date().toLocaleString(),
      attachments: ["requirement_doc.pdf"],
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleAddMessage = () => {
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        sender: "Consultant",
        text: newMessage,
        timestamp: new Date().toLocaleString(),
        attachments,
      },
    ]);
    setNewMessage("");
    setAttachments([]);
  };

  const handleFileUpload = (e) => {
    setAttachments([
      ...attachments,
      ...Array.from(e.target.files).map((file) => file.name),
    ]);
  };

  const handleShow = (message) => {
    setSelectedMessage(message);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Communication History</h3>
      <ListGroup className="mb-4">
        {messages.map((message) => (
          <ListGroup.Item key={message.id} onClick={() => handleShow(message)}>
            <strong>{message.sender}</strong>: {message.text} <br />
            <small>{message.timestamp}</small>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form>
        <Form.Group controlId="formNewMessage">
          <Form.Label>New Message</Form.Label>
          <Form.Control
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formFileUpload">
          <Form.Label>Attach Files</Form.Label>
          <Form.Control type="file" multiple onChange={handleFileUpload} />
        </Form.Group>
        <Button variant="primary" onClick={handleAddMessage} className="m-3">
          Send Message
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message Details</Modal.Title>
        </Modal.Header>
        {selectedMessage && (
          <Modal.Body>
            <p>
              <strong>Sender:</strong> {selectedMessage.sender}
            </p>
            <p>
              <strong>Message:</strong> {selectedMessage.text}
            </p>
            <p>
              <strong>Timestamp:</strong> {selectedMessage.timestamp}
            </p>
            {selectedMessage.attachments.length > 0 && (
              <>
                <p>
                  <strong>Attachments:</strong>
                </p>
                <ul>
                  {selectedMessage.attachments.map((attachment, index) => (
                    <li key={index}>{attachment}</li>
                  ))}
                </ul>
              </>
            )}
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const BudgetsAndPayments = () => {
  const [budgetItems, setBudgetItems] = useState([
    {
      id: 1,
      name: "Initial Deposit",
      amount: 5000,
      status: "Paid",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      name: "Design Phase",
      amount: 3000,
      status: "Invoiced",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 3,
      name: "Development Phase",
      amount: 10000,
      status: "Outstanding",
      date: new Date().toLocaleDateString(),
    },
  ]);

  const [newBudgetItem, setNewBudgetItem] = useState({
    name: "",
    amount: "",
    status: "Outstanding",
    date: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddBudgetItem = () => {
    setBudgetItems([
      ...budgetItems,
      {
        id: budgetItems.length + 1,
        ...newBudgetItem,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setNewBudgetItem({ name: "", amount: "", status: "Outstanding", date: "" });
    handleClose();
  };

  const totalBudget = budgetItems.reduce(
    (total, item) => total + parseFloat(item.amount),
    0
  );
  const paidAmount = budgetItems
    .filter((item) => item.status === "Paid")
    .reduce((total, item) => total + parseFloat(item.amount), 0);
  const invoicedAmount = budgetItems
    .filter((item) => item.status === "Invoiced")
    .reduce((total, item) => total + parseFloat(item.amount), 0);
  const outstandingAmount = budgetItems
    .filter((item) => item.status === "Outstanding")
    .reduce((total, item) => total + parseFloat(item.amount), 0);

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Budgets and Payments</h3>
      <Table striped bordered hover className="mb-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {budgetItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>${item.amount.toFixed(2)}</td>
              <td>{item.status}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3>Summary</h3>
      <ul>
        <li>Total Budget: ${totalBudget.toFixed(2)}</li>
        <li>Paid Amount: ${paidAmount.toFixed(2)}</li>
        <li>Invoiced Amount: ${invoicedAmount.toFixed(2)}</li>
        <li>Outstanding Amount: ${outstandingAmount.toFixed(2)}</li>
      </ul>

      <Button variant="primary" onClick={handleShow} className="m-3">
        Add Budget Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Budget Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formItemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                value={newBudgetItem.name}
                onChange={(e) =>
                  setNewBudgetItem({ ...newBudgetItem, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                value={newBudgetItem.amount}
                onChange={(e) =>
                  setNewBudgetItem({
                    ...newBudgetItem,
                    amount: parseFloat(e.target.value),
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                value={newBudgetItem.status}
                onChange={(e) =>
                  setNewBudgetItem({ ...newBudgetItem, status: e.target.value })
                }
              >
                <option>Paid</option>
                <option>Invoiced</option>
                <option>Outstanding</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddBudgetItem}>
            Add Item
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const ConsultantManagement = () => {
  const [consultants, setConsultants] = useState([
    { id: 1, name: "John Doe", expertise: "Frontend Development" },
    { id: 2, name: "Jane Smith", expertise: "Backend Development" },
    { id: 3, name: "Sam Johnson", expertise: "UI/UX Design" },
  ]);

  const [currentConsultant, setCurrentConsultant] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (consultant) => {
    setCurrentConsultant(consultant);
    setShow(true);
  };

  const handleAssignConsultant = (newConsultant) => {
    setCurrentConsultant(newConsultant);
    setShow(false);
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center mb-4">Consultant Management</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Expertise</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {consultants.map((consultant) => (
            <tr key={consultant.id}>
              <td>{consultant.id}</td>
              <td>{consultant.name}</td>
              <td>{consultant.expertise}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleShow(consultant)}
                >
                  {currentConsultant && currentConsultant.id === consultant.id
                    ? "Change"
                    : "Assign"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentConsultant ? "Change Consultant" : "Assign Consultant"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formConsultantSelect">
              <Form.Label>Select Consultant</Form.Label>
              <Form.Control
                as="select"
                onChange={(e) =>
                  handleAssignConsultant(
                    consultants.find((c) => c.id == e.target.value)
                  )
                }
              >
                <option value="" disabled selected>
                  Select a consultant
                </option>
                {consultants.map((consultant) => (
                  <option key={consultant.id} value={consultant.id}>
                    {consultant.name} - {consultant.expertise}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

const ClientFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      client: "Alice Johnson",
      rating: 5,
      comments: "Excellent service!",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      client: "Bob Smith",
      rating: 4,
      comments: "Very good, but can improve.",
      date: new Date().toLocaleDateString(),
    },
  ]);

  const [newFeedback, setNewFeedback] = useState({
    client: "",
    rating: 0,
    comments: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmitFeedback = () => {
    setFeedbackList([
      ...feedbackList,
      {
        id: feedbackList.length + 1,
        ...newFeedback,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setNewFeedback({ client: "", rating: 0, comments: "" });
    handleClose();
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center mb-4">Client Feedback</h3>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Rating</th>
            <th>Comments</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {feedbackList.map((feedback) => (
            <tr key={feedback.id}>
              <td>{feedback.id}</td>
              <td>{feedback.client}</td>
              <td>{feedback.rating}</td>
              <td>{feedback.comments}</td>
              <td>{feedback.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Row className="mb-4">
        <Col>
          <Button variant="primary" onClick={handleShow}>
            Submit Feedback
          </Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formClientName">
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                type="text"
                value={newFeedback.client}
                onChange={(e) =>
                  setNewFeedback({ ...newFeedback, client: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group controlId="formRating">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                as="select"
                value={newFeedback.rating}
                onChange={(e) =>
                  setNewFeedback({
                    ...newFeedback,
                    rating: parseInt(e.target.value),
                  })
                }
              >
                <option value={0} disabled>
                  Select rating
                </option>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formComments">
              <Form.Label>Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newFeedback.comments}
                onChange={(e) =>
                  setNewFeedback({ ...newFeedback, comments: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitFeedback}>
            Submit Feedback
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

const ProjectDetails = () => {
  // Mock data for project history

  // Mock data for communication history

  // Function to handle suspension of account
  const handleSuspendAccount = () => {
    // Add logic to suspend account here
    alert("Account suspended");
  };

  // Function to handle deactivation of account
  const handleDeactivateAccount = () => {
    // Add logic to deactivate account here
    alert("Account deactivated");
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Project Details</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          {/* Consultant Profile Information */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project Scope</h3>
            </div>
            <div className="card-body">
              <form>
                {/* Form fields for name, email, phone number, expertise, industry experience, location, hourly rate, profile picture, bio, and verification process */}
                {/* Example:
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                */}
              </form>
            </div>
            <div className="card-header">
              <h3 className="card-title">Brief Description</h3>
            </div>
            <div className="card-body">
              <form>
                {/* Form fields for name, email, phone number, expertise, industry experience, location, hourly rate, profile picture, bio, and verification process */}
                {/* Example:
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                */}
              </form>
            </div>
          </div>
          {/** timeline and milestones */}
          <div className="card">
            <Timeline />
          </div>
          {/** deliverables */}
          <div className="card">
            <Deliverables />
          </div>
          {/** communication history */}
          <div className="card">
            <CommunicationHistory />
          </div>
          {/**  budgets and payments */}
          <div className="card">
            <BudgetsAndPayments />
          </div>
          {/**  consultant management */}
          <div className="card">
            <ConsultantManagement />
          </div>
          {/**  client Feedback */}
          <div className="card">
            <ClientFeedback />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
