import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import NeedKnow_Li_Li from './NeedKnow_Li_Li'
import NeedKnow_Li_No from './NeedKnow_Li_No'
class NeedKnow_Li extends Component {
        constructor() {
            super()
            this.state = {
                num:0
            }
        }
    changenum=(num)=>{
        this.setState({
            num:num
        });
    }

    render(){
        let {data}=this.props
        console.log(data,'0000')
        let l=data.detail.map((e,i)=>{
            for(var attr in e){
                if(attr=='t')return<NeedKnow_Li_Li data={e} key={i} i={i}  changenum={this.changenum} num={this.state.num} />
            }
            return <NeedKnow_Li_No data={e} key={i}/>
        })

      return (
        <li>
            <div className='item'>
                <img src={require("./imgs/item.png")} alt="" />
                <p>{data.pra}</p>
            </div>
            <ul className='item_detail'>
                {l}
            </ul>
        </li>
      )
    } 
 }

export default NeedKnow_Li