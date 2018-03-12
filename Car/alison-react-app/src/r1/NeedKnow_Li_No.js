import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';

class Br extends Component{
    render(){
        let {pr}=this.props
        return (
            <p >
            {pr}
            <br />
            </p>
        )
    }
}

class NeedKnow_Li_No extends Component {

    render(){
        let {data}=this.props
        console.log(data)
        let list=data.h.map((e,i)=>{
            return  <Br key={i} pr={e}/>
        })
        
      return (
        <li className='bott'>
            <div className='item_detail_head'> 
                {list}
            </div>
        </li>
      )
    } 
 }

export default NeedKnow_Li_No