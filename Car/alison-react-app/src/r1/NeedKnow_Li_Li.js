import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';

class Br extends Component{
    render(){
        let {p}=this.props
        return (
            <p >
            {p}
            <br />
            </p>
        )
    }
}

class NeedKnow_Li_Li extends Component {
    click=()=>{
        let {changenum,i}=this.props
        changenum(i)
    }

    render(){
        let {data,i,num}=this.props
        console.log(data)
        let list=data.h.map((e,i)=>{
            return  <Br key={i} p={e}/>
        })
        let ppp=data.t.map((e,i)=>{
            return  <Br key={i} p={e}/>
        })
        console.log(i,num)
    
      return (
        <li className={i==num?'bott':'hidd'} onClick={this.click} >
            <div className='item_detail_head'> 
                {list}
                <span ></span>
            </div>
            <div className={i==num?'item_detail_p show':'item_detail_p dis_hidden'}>
                {ppp}
            </div>
        </li>
      )
    } 
 }

export default NeedKnow_Li_Li