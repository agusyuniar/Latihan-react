import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

const Kartu = (props) => {
  return (
    <CardGroup className='col-3'>
      <Card>
        {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
        <CardBody className='text-center'>
          <CardTitle><h3>Kartu Nama</h3></CardTitle>
          <CardSubtitle>{props.namabuah}</CardSubtitle>
          <CardSubtitle><img src={props.gambar} alt='product' height='150' width='150'/></CardSubtitle>
          <CardText>Rp {props.harga},-</CardText>
          <Button>Oh gitu</Button>
        </CardBody>
      </Card>
      
    </CardGroup>
  );
};

export default Kartu;