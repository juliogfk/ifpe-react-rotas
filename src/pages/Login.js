import { Container,Image} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import image from '../assets/imagem.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (

    <Container style={{display:'flex',justfyContent:'center', flexDirection:'row',alignItems:'center', marginLeft:500}}>
    <Image style={{display:'flex',justifyContent:'center',alignItems:'center'}} src={image} />
    <Form style={{display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', alignItems:'center',border:'solid',padding:10, margin:20}}>
      <Form.Label style={{fontSize: 40, marginBottom:20}}>Login</Form.Label>
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
        margin:10, 
        padding:10, 
        width:230,
        border:'none',
        textDecoration:'none', 
      }} 
      variant="primary" type="submit">
        Acessar
      </button>
      </Link>
  
   
    <Link to='/cadastro'>
      <button style={{
        display:'flex',
        justifyContent:'center',
        backgroundColor:'rgb(255, 0, 0)', 
        color: 'white', 
        fontSize:15, 
        margin:0, 
        padding:10, 
        width:230,
        border:'none',
        textDecoration:'none'
      }} 
      variant="primary" type="submit">
        Cadastre-se
      </button>
      </Link>
    </Form>
    </Container>
  );
}

export default Login;
