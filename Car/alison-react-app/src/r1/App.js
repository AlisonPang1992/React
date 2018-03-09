import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import './App.css';
import SwiperM from './SwiperM'
import data from './data'


class App extends Component {
    constructor(){
      super();

    }

    render(){ 
        console.log(data)
        var spans=''
        data.swiper.forEach((e,i)=>{
            spans+= <span></span>
        })
        console.log(spans)
    
      return (
        <div>
           <header className='class_header'>
                <p>易教练</p>
                <span id="login_header">登录</span>
            </header>
            <section>
                <div id="Ad">
                    <SwiperM  />
                </div>
                <div id='Notes'>
                    <ul>
                        <li>
                        <img src= {require("./imgs/Note.png")} />
                        <span>报名须知</span>
                        </li>
                        <li>
                            <img src={require("./imgs/Carprocess.png" )} />
                            <span>学车流程</span>
                        </li>
                        <li>
                            <img src={require("./imgs/ServerA.png")} />
                            <span>服务优势</span>
                        </li>
                        <li>
                            <img src={require("./imgs/Question.png")} />
                            <span>常见问题</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section id='content_home'>
                <img src={require("./imgs/SelectT.png")} className='img_Ss' />
                <p className='Select'>套单选择</p>
                <div id='content_Peixunf'>
                    <div className='Peixunf'>
                        <p className='p1'>科目二培训费</p>
                        <p>90元／小时</p>
                        <div>立即缴费</div>   
                    </div>
                    <div className='Peixunf'>
                        <p className='p1'>科目三培训费</p>
                        <p>120元／小时</p>
                        <div>立即缴费</div>   
                    </div>
                </div>
                <ul className='content_class_home'>
                <li>
                    <img src={require("./imgs/Stars.png")} />
                    <h4>C1特惠班</h4>
                    <p><span>2450</span>元</p>
                    <hr />
                    <ul>
                    <li>
                        <p><span></span>自主预约练车</p>
                    </li>
                    <li>
                        <p><span></span>4人1车培训</p>
                    </li>
                    <li>
                        <p><span></span>贴心管家服务</p>
                    </li>
                    <li>
                        <p><span></span>自营驾培教练</p>
                    </li>
                    </ul>
                </li>
                <li>
                    <img src={require("./imgs/Stars.png")} />
                    <h4>C1大包车</h4>
                    <p><span>2980</span>元</p>
                    <hr />
                    <ul>
                    <li>
                        <p><span></span>自主预约练车</p>
                    </li>
                    <li>
                        <p><span></span>收费项目透明</p>
                    </li>
                    <li>
                        <p><span></span>4人1车培训</p>
                    </li>
                    <li>
                        <p><span></span>自营驾培教练</p>
                    </li>
                    </ul>
                </li>
                <li>
                    <img src={require("./imgs/Stars.png")} />
                    <h4>C1稳过班</h4>
                    <p><span>3380</span>元</p>
                    <hr />
                    <ul>
                    <li>
                        <p><span></span>自主预约练车</p>
                    </li>
                    <li>
                        <p><span></span>收费项目透明</p>
                    </li>
                    <li>
                        <p><span></span>1人1车培训</p>
                    </li>
                    <li>
                        <p><span></span>自营驾培教练</p>
                    </li>
                    </ul>
                </li>
                <li>
                    <img src={require("./imgs/Stars.png" )}/>
                    <h4>C2全包车</h4>
                    <p><span>3280</span>元</p>
                    <hr />
                    <ul>
                    <li>
                        <p><span></span>自主预约练车</p>
                    </li>
                    <li>
                        <p><span></span>4人1车培训C2</p>
                    </li>
                    <li>
                        <p><span></span>贴心管家服务</p>
                    </li>
                    <li>
                        <p><span></span>自营驾培教练</p>
                    </li>
                    </ul>
                </li>
                </ul>
                <div id='foot_div'></div>
            </section>
            <footer>
                <ul>
                <li>
                    <img src={require("./imgs/Home1.png")} />
                    <p>首页</p>
                </li>
                <li>
                    <img src={require("./imgs/Study1.png")} />
                    <p>学习</p>
                </li>
                <li>
                    <img src={require("./imgs/Car1.png")} />
                    <p>发现</p>
                </li>
                <li>
                    <img src={require("./imgs/Mine1.png")} />
                    <p>我的</p>
                </li>
                </ul>
            </footer>  
        </div>       
      )
    } 
 }

export default App