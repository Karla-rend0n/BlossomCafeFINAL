import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [formValue, setformValue] = useState({
        email: '',
        password: ''
    })

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [users, setUsers] = useState([])

    const onChange = (e) => {
        e.persist();
        setformValue({...formValue, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        const formData = new FormData();
        formData.append("name", formValue.name)
        axios.post("http://localhost/example-TADW/public/api/show_student", formData, 
            { headers: {'Content-Type': 'multipart/form-data',
        'Accept': 'application/json'}}
        ).then(response => {
            console.log('response');
            //console.log(response);
            if (response.status==200){
                console.log(response.data)
                //console.log(response.data[0]['email'])
                //setEmail(response.data[0]['name'])
                setUsers(response.data);
            }
        }).catch(error => {console.log(error)})
    }

  return (
    <Container>
            <br />
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" 
                                name="name" value={formValue.name} onChange={onChange}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                                name="password" value={formValue.password} onChange={onChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        {email}
                        <Button variant="primary" type="submit"> 
                            Submit
                        </Button>
                    </Col>
                    <Col>

                    {users.map((user)=>(
                        <Card style={{ width: '18rem' }} key={user.id}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>{user.email}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    ))}
                    </Col>
                </Row>
            </Form>
        </Container>
  )
}

export default Login