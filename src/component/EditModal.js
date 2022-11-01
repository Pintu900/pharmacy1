import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React,{useState,useEffect} from 'react';
import Firebase from 'firebase';
import firebaseConfig from '../firebaseConfig';

function EditModal(props) {
  const [name,setName]=useState('');
  const [box,setBox]=useState('');
  const [price,setPrice]=useState('');
  const [show,setShow]=useState(true);

  useEffect(()=>{
    if(props.info != ''){
        var starCountRef = Firebase.database().ref('record').child(props.info);
        starCountRef.on('value', (snapshot) => {
          const data = snapshot.val();
          console.log(data.name);
          setName(data.name);
          setBox(data.box);
          setPrice(data.price);
        });
    } },[])

  function writeUserData(event) {
    event.preventDefault();
    const d = new Date();
    console.log(props.info);
   Firebase.database().ref('/').child('record').child(props.info).set({
      name: name,
      box: box,
      price:price
    });  
    props.onHide();
    props.setkey1();
 }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Insert Data
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={writeUserData}>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Medicine name"  onChange={(event)=> setName(event.target.value)}
            value={name} required />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label>Box</Form.Label>
        <Form.Control type="text" placeholder="Enter Box Name" onChange={(event)=> setBox(event.target.value)}
            value={box} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Price" onChange={(event)=> setPrice(event.target.value)}
            value={price} required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Modal.Body>
    </Modal>
  );
}


export default EditModal;