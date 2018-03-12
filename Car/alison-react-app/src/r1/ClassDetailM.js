import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import './App.css';
import data from './data'


class ClassDetailM extends Component {
    constructor(){
      super();

    } 

    render(){


      return (
        <div>
                <header className="class_header">
                    <span >{'<'}</span>
                    <p>C1特惠班</p>
                    <img src="imgs/Home1.png" />
                </header>
                <section id='class_info'>
                    <img src="imgs/info.png " />
                </section>
                <section id='content_class'>
                    <img src='imgs/payinfo.png' className='img_Ss' />
                    <p className='Select'>报名费用说明</p>
                    <ul id='class_money'>
                    <li className='class_money_li'>
                        <p className='class_money_left'>初考费（科目一至科目四初考费）</p>
                        <p className='class_money_right'>410元</p>    
                    </li>
                    <li className='class_money_li'>
                        <p className='class_money_left'>注册费（高拍、建立档案）</p>
                        <p className='class_money_right'>389元</p>    
                    </li>
                    <li className='class_money_li'>
                        <p className='class_money_left'>服务费（上门咨询，考试接送，专人带考）</p>
                        <p className='class_money_right'>200元</p>    
                    </li>
                    <li className='class_money_li'>
                        <p className='class_money_left'>培训费</p>
                        <p className='class_money_right'>1481元</p>    
                    </li>
                    <li className='class_money_cont'>
                        <p className='class_money_left'>费用合计</p>
                        <p className='class_money_right'>2480元</p>    
                    </li>
                    </ul>
                </section>
                <section id='class_condition'>
                    <div >
                        <ul className='class_condition_head'>
                        <li className='br'>报考条件</li>
                        <li className='br'>报考资料</li>
                        <li>报名流程</li>
                        </ul>
                        <div className='content_cir'>
                        <ul>
                            <li>1、培训范围C1</li>
                            <li>2、18-70周岁</li>
                            <li>3、身高：不限身高</li>
                            <li>4、视力：>=4.9（矫正）</li>
                            <li>5、听力无障碍</li>
                            <li>6、下肢健全，左下肢残缺允许报C2</li>
                            <li>7、上肢健全</li>
                            <li>8、躯干、颈部无运动无运动障碍</li>
                            <li>9、辨色力无红绿色盲、色弱</li>
                            <li>10、无考任何驾驶证经历</li>
                            <li>11、三年内无吸毒、注射毒品行为</li>
                        </ul>
                        </div>
                    </div>
                
                </section>
                <div id='foot_div'></div>
                <footer>
                    <div className='foot_paycheck'>
                    <input type="checkbox" />我已阅读并同意<span>《报名协议》</span>
                    </div>
                    <div className='foot_pay'>立即缴费</div>   
                </footer>     
        </div>       
      )
    } 
 }

export default ClassDetailM