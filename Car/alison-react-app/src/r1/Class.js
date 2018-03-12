import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import './App.css';
import SwiperM from './SwiperM'
import data from './data';
import NoteM from './NoteM'

class Class_Li extends Component {

    render() { 
        return ( 
            <li>
                    <p><span></span>{this.props.d}</p>
            </li>
         )
    }
}
 


class ClassM extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render(){ 
        let {data}=this.props
        let list=data.notes.map((e,i)=>{
            return <Class_Li key={i} d={e} />
        })

      return (
        <div>
            <Link to={'/class/'+data.name} >
            <li>
                <img src={require("./imgs/Stars.png")} />
                <h4>{data.name}</h4>
                <p><span>{data.price}</span>元</p>
                <hr />
                <ul>
                {list}
                </ul>
            </li>
            </Link>
        </div>       
      )
    } 
 }

export default ClassM