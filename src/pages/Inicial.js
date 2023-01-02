import { Container, Image} from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
import image from '../assets/imagem2.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
function Inicial() {
  return (
    <Container style={{display:'flex',justfyContent:'center', flexDirection:'row',alignItems:'center', marginLeft:500}}>
        <Link to='/'>
          <Image style={{display:'flex',justifyContent:'center',alignItems:'center'}} src={image} />
        </Link>
    </Container>
  );
}

export default Inicial;
