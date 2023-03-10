import { Container,Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import image from '../assets/imagem.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

function Cadastro() {
  return (
    <Container style={{display:'flex',justfyContent:'center', flexDirection:'row',alignItems:'center', marginLeft:500}}>
    <Image style={{display:'flex',justifyContent:'center',alignItems:'center'}} src={image} />
    <Form style={{display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', alignItems:'center',border:'solid',padding:10, margin:20}}>
      <Form.Label style={{fontSize: 35, marginBottom:30}}>Cadastrar Usuário</Form.Label>
      
      <Form.Group style={{display:'flex',justifyContent:'center'}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{padding:5}}>Nome:</Form.Label>
        <Form.Control type="nome" placeholder="" />
      </Form.Group>
      
      <Form.Group style={{display:'flex',justifyContent:'center',margin:20}} className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{padding:5}}>Email:</Form.Label>
        <Form.Control type="email" placeholder="" />
      </Form.Group>

      <Form.Group style={{display:'flex',justifyContent:'center'}} className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{padding:5}}>Senha:</Form.Label>
        <Form.Control type="password" placeholder="" />
      </Form.Group>
      <Link to='/inicial'>
      <button style={{
        display:'flex',
        justifyContent:'center',
        backgroundColor:'rgb(0, 105, 248)', 
        color: 'white', 
        fontSize:15, 
        margin:20, 
        padding:10, 
        width:230,
        border:'none' 
      }} 
      variant="primary" type="submit">
        Cadastrar
      </button>
      </Link>
    </Form>

    </Container>
  );
}

export default Cadastro;
