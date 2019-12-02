import React, {Component} from 'react'
import {Button, Input} from 'reactstrap'
import Axios from 'axios'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {login,logout} from '../redux/action'
import { link } from 'fs'

class Login extends Component{
    edit = () => {
        let input = this.text.value;
        this.props.login(input)
        console.log(input)
    }


    
    loginUser = () => {
        let username = this.user.value;
        let password = this.pass.value;
        if(username === '' || password === ''){
            alert('username or password should not be empty')
        }else{
            Axios.get(`http://localhost:2000/Login?username=${username}&password=${password}`, {
                username,
                password
            })
            .then((res) => {
                if(res.data.length === 0){
                    alert('username or password invalid')
                }else{
                    if(res.data.length===1){
                        console.log(res.data)
                        this.props.login(res.data[0])
                        
                        this.user.value=''
                        this.pass.value=''
                        this.redir()
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    redir=()=>{
        if(this.props.username){
            return(
                <p>Selamat datang, {this.props.username}<br/>
                <Link to='/home'>Klik untuk lanjut...</Link>
                </p>
            )
        }
    }
    render(){
        console.log(this.props.username)
        return(
            <div className='container col-3 p-5'>
                <center>
                    <p>
                    <Input type='text' placeholder='username' innerRef={(user)=>this.user=user}/>  
                    </p>
                    <p>
                    <Input type='password' placeholder='password' innerRef={(pass)=>this.pass=pass}/>  
                        </p>
                        <Button onClick={this.loginUser}>Login</Button>

                    
                    <p>
                        {/* {this.props.username} */}
                        {this.redir()}
                    </p>
                </center>
            </div>
        )
    }
}

const mapStatetoProps= (state) => {
    return{
        username : state.user.username
    }
}

export default connect(mapStatetoProps,{login})(Login)