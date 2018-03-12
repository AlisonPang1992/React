import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import './App.css';
import data from './data'

class PayChangeM extends Component {
    constructor(){
      super();
      this.state={
        mon:0
      }
    } 
    add=()=>{
        this.setState({
            mon:this.state.mon+this.state.ori
        });
    }
    del=()=>{
        let num=this.state.mon-this.state.ori;
        if(num<this.state.ori)num=this.state.ori
        this.setState({
            mon:num
        });
    }
    componentWillMount(){
        var arr=this.props.location.pathname.split('/')
        let mon=null
        for(var i=0;i<data.Peixunf.length;i++){
            for(var attr in data.Peixunf[i]){
                if(attr==arr[2]){
                    mon=data.Peixunf[i][attr]
                }
            }
        }
        var mon1=mon
        if(arr[3])mon1=arr[3]*1
        this.setState({
            ori:mon,
            mon:mon1
        });
    }

    render(){
        var arr=this.props.location.pathname.split('/')
      return (
        <div>
             <header className="class_header">
                <Link to='/home'>
                <span>{'<'}</span>
                </Link>
                <p>{arr[2]}</p> 
            </header>
            <div id='pay_add'>
                <h3>输入金额: </h3> <p>
                <span onClick={this.del} >-</span>
                <strong>{this.state.mon}</strong>
                <span onClick={this.add}>+</span></p>
                <div>
                    <Link to={'/pay/'+arr[2]+'='+this.state.mon}  >
                        缴费
                    </Link>
                </div>
            </div>   
        </div>       
      )
    } 
 }

export default PayChangeM