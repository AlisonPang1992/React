import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import './App.css';
import data from './data'
import SwiperM_S from './SwiperM_span'


class SwiperM extends Component {
    constructor(){
      super();
      this.state={
          swiper:data.swiper,
          swiper_l:[data.swiper[data.swiper.length-1],data.swiper[0],data.swiper[1]],
          num:0
      }
    } 
    timer=null
    swiper_autoplay=()=>{
        let {swiper,num,swiper_l}=this.state
        let len=swiper.length
        
        this.timer=setInterval(()=>{
            num++;         
            let before=num-1
            if(num>len-1){
                num=0
                before=data.swiper.length-1
            }
            let after=num+1
            if(num==len-1){
                after=0
            }
            swiper_l=[data.swiper[before],data.swiper[num],data.swiper[after]]
            this.setState({
                swiper,
                swiper_l,
                num
            });
            console.log(this.state.swiper_l,before,num,after,data.swiper[5])
        },2000)
    }
    componentDidMount(){
        this.swiper_autoplay()
    }

    render(){
        let {swiper,num,swiper_l}=this.state
        let list_s=data.swiper.map((e,i)=>{
            return <SwiperM_S key={i} num={num} i={i} />
        })   
      return (
        <div>
            <ul>
                <li>
                    <img src={require("./"+swiper_l[2])} />
                </li>
                <li>
                    <img src={require("./"+swiper_l[0])} />
                </li>
                <li>
                    <img src={require("./"+swiper_l[1])} />
                </li>
            </ul>
            <div id="spans">
                {list_s}
            </div>       
        </div>       
      )
    } 
 }

export default SwiperM