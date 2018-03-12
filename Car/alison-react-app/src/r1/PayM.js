import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import './App.css';
import data from './data'
import FullTip from './Tip'

class PayM extends Component {
    constructor(){
      super();
      this.state={
        ali:true,
        hPosition:-100,
        text:'暂不支持支付功能，敬请期待～～'
      }
    } 
    click=()=>{
        this.props.history.goBack()  
    }
    ali=()=>{
        this.setState({
            ali:true
        })
    }
    wechart=()=>{
        this.setState({
            ali:false
        })
    }
    changetext=()=>{
        let {text,hPosition}=this.state  
        this.setState({
            hPosition:500,
        },function(){
            setTimeout(()=>{
                this.setState({
                    hPosition:-150,
                });
            },2000)            
        });
    }

    render(){
        var arr=this.props.location.pathname.split('/')
        arr=arr[2].split('=')
        console.log(this.props.history)

      return (
        <div>
               <header className="class_header">
                        <span onClick={this.click}>{'<'}</span>               
                    <p>支付订单</p>
                </header>
                <section id='pay_money'>
                    <img src={require("./imgs/logo.png")} />
                    <div>
                    <h5>¥ {arr[1]}</h5>
                    <p>{arr[0]}</p>
                    </div>
                </section>
                <section id='payment_select'>
                    <div className='pay_L ali'>
                    <img src={require("./imgs/alipay.png")} />
                    <div>
                        <h4>支付宝支付</h4>
                        <p>推荐有支付宝账号的用户使用</p>
                    </div>
                    <input type="checkbox" className={this.state.ali?"active_pay":'noactive'} onClick={this.ali} />
                    </div>
                    <div className='pay_L wechart'>
                        <img src={require("./imgs/wechartpay.png")} />
                        <div>
                        <h4 >微信支付</h4>
                        <p>推荐安装微信5.0以上版本用户使用</p>
                        </div>
                        <input type="checkbox" className={this.state.ali?"noactive":'active_pay'} onClick={this.wechart} />
                    </div>
                </section>
                <div id='pay_sure' onClick={this.changetext}>
                    确认支付  <span>¥ {arr[1]}</span>
                </div>
                <FullTip 
                    hPosition={this.state.hPosition} 
                    text={this.state.text} 
                />  
        </div>       
      )
    } 
 }

export default PayM