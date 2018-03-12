import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import data from './data'
import App from './App'
import NeedKnow_Li from './NeedKnow_Li'


class NeedKnow extends Component {
    constructor(){
      super();
      this.state={

      }
    } 
    click=()=>{
        console.log(this.props.history.goBack)
        this.props.history.goBack()
    }


    render(){
        var arr=this.props.location.pathname.split('/')
        let data_this=null

        for(var i=0;i<(data.needknow.length);i++){
            if(data.needknow[i].tit==arr[2])data_this=data.needknow[i]
        }
        let list=data_this.text.map((e,i)=>{
            return <NeedKnow_Li data={e} key={i} /> 
        })
        
      return (
        <div>
              <header className="class_header">
                    <span onClick={this.click}>{'<'}</span>
                    <p>{data_this.tit}</p>
                    <Link to='/home'>
                    <img src={require("./imgs/Home1.png")}/>
                    </Link>
                </header>
                <ul id='item_list'>
                    {list}              
                </ul>
                
        </div>
      )
    } 
 }

export default NeedKnow