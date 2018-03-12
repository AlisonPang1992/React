import React,{Component} from 'react';
import {
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import './App.css';
import SwiperM from './SwiperM'
import data from './data';
import NoteM from './NoteM'


class PeiS extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let {attr,mon}=this.props
        return ( 
            <div className='Peixunf'>
                <Link to={'/paychange/'+ attr}>
                <p className='p1'>{attr}</p>
                <p>{mon}元／小时</p>
                <div>立即缴费</div>  
                </Link> 
            </div>
         )
    }
}

class HomeM extends Component {

    render(){ 
        let Peixunf=data.Peixunf.map((e,i)=>{
            for(var attr in e){
                return <PeiS key={i} attr={attr} mon={e[attr]} />
            }
        })
    
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
                    <NoteM />
                </div>
            </section>
            <section id='content_home'>
                <img src={require("./imgs/SelectT.png")} className='img_Ss' />
                <p className='Select'>套单选择</p>
                <div id='content_Peixunf'>
                    {Peixunf}
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

export default HomeM