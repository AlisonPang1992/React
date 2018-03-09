import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import './App.css';
import data from './data'


class SwiperM_S extends Component {
    constructor(){
      super();

    }

    render(){
        let {i,num}=this.props
        let className1=(i==num)?'active_play':''
      return (
            <span className={className1}></span> 
      )
    } 
 }

export default SwiperM_S