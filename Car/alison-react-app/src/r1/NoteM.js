import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import data from './data'
import App from './App'
import NeedKnow from './NeedKnow'
import NoteM_Li from './NoteM_Li'



class NoteM extends Component {

    render(){
        console.log(data.needknow)
        var list=data.needknow.map((e,i)=>{
            return <NoteM_Li key={i} data={e} />
        })
      return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
      )
    } 
 }

export default NoteM