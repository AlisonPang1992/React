import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import NeedKnow from './NeedKnow'



class NoteM_Li extends Component {



    render(){
        let {data}=this.props
        var img=data.img;
        var tit=data.tit
          
      return (
        <li>       
            <Link to={'/needknow/'+tit}>
            <img src={require("./"+img)} />
            <span >
            {tit}
            </span>
            </Link>         
        </li>
      )
    } 
 }

export default NoteM_Li