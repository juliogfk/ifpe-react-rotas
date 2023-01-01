import { Container,Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import image from '../assets/imagem2.jpg';

function Inicial() {
  return (
    <Container style={{display:'flex',justfyContent:'center', flexDirection:'row',alignItems:'center', marginLeft:500}}>
      <Button>
        <Image style={{display:'flex',justifyContent:'center',alignItems:'center'}} src={image} />
      </Button>
    </Container>
  );
}

export default Inicial;
