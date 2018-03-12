import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import './App.css';
import data from './data'

class PayM extends Component {
    constructor(){
      super();
      this.state={
        mon:0
      }
    } 


    render(){

      return (
        <div>
               <header className="class_header">
                    <Link to='/home'>
                        <span>{'<'}</span>
                    </Link>
                    <p>支付订单</p>
                </header>
                <section id='pay_money'>
                    <img src={require("./imgs/logo.png")} />
                    <div>
                    <h5>¥ 90</h5>
                    <p>科目二培训费</p>
                    </div>
                </section>
                <section id='payment_select'>
                    <div className='pay_L ali'>
                    <img src={require("./imgs/alipay.png")}  alt="" />
                    <div>
                        <h4>支付宝支付</h4>
                        <p>推荐有支付宝账号的用户使用</p>
                    </div>
                    <input type="checkbox" className="active_pay" />
                    </div>
                    <div className='pay_L wechart'>
                        <img src={require("./imgs/wechartpay.png")} alt="" />
                        <div>
                        <h4 >微信支付</h4>
                        <p>推荐安装微信5.0以上版本户使用</p>
                        </div>
                        <input type="checkbox" className='noactive' />
                    </div>
                </section>
                <div id='pay_sure'>
                    确认支付  <span>¥ 90</span>
                </div>
        </div>       
      )
    } 
 }

export default PayM