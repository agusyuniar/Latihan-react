import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Row, Col, Table, Form, FormGroup, Label, Input, FormText, DropdownItem  } from 'reactstrap';
import Axios from 'axios';
import Caro from '../component/carousel'
import Kartu from '../component/card'
import {CarouselItem} from 'reactstrap';
class home extends Component{
    state={
        data:[],
        selectedId:null
    }

componentDidMount(){
    Axios.get('http://localhost:2000/buah')
    .then((res)=>{
        // console.log(res.data)
        this.setState({data:res.data})
        console.log(this.state.data)
        // console.log(this.state.data[2].first_name)
    })
    .catch((err)=>{
        console.log(err)
    })
}
renderKartu=()=>{
    return this.state.data.map((val) => {
        return(
            <Kartu 
            namabuah={val.nama_buah} 
            harga={val.harga} 
            gambar={val.gambar}/>
        )
    })
}
rendercaro = () => {
        return this.state.data.map((val) => {
            return(
                               
                    <div class="carousel-item">
                        <img src={val.gambar} class="d-block w-100" height='100px' width='100px' alt='gambarbuah'/>
                    </div>            
                
            )
        })
    }
    render(){
        return(
            <div>
                <h1>Katanya ini Home</h1>

                <Caro/>
                    {/* {this.rendercaro()} */}
                {/* <Caro isi={this.rendercaro()}/> */}

                <Row className='mb-2'>
                        {this.renderKartu()}
                    </Row>
            </div>
    )}
}
export default home;