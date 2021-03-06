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
          num:0,
          left:null,
          time:1
      }
    } 
    timer=null
    swiper_autoplay=()=>{
        let {swiper,num,swiper_l}=this.state
        let len=swiper.length
        let left=this.refs.swiper.offsetLeft

        this.timer=setInterval(()=>{
            this.setState({
                time:1,
                left:left*2
            },()=>{
                setTimeout(()=>{
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
                        num,
                        left:left,
                        time:0
                    });
                },1000)

            });
          
        },5000)
    }

    componentDidMount(){
        this.swiper_autoplay()
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        let {swiper,num,swiper_l,left,time}=this.state
        let list_s=data.swiper.map((e,i)=>{
            return <SwiperM_S key={i} num={num} i={i} />
        })

      return (
        <div>
            <ul  ref='swiper' style={{left:left+'px',transition:time+'s'}}>
                <li>
                    <img src={require("./"+swiper_l[0])} />
                </li>
                <li>
                    <img src={require("./"+swiper_l[1])} />
                </li>
                <li>
                    <img src={require("./"+swiper_l[2])} />
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