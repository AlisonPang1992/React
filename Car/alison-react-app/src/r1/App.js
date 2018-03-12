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
import HomeM from './Home'
import NeedKnow from './NeedKnow'
import PayChangeM from './PayChangrM'
import PayM from './PayM';
import ClassDetailM from './ClassDetailM'

class App extends Component {
    constructor(){
      super();

    }

    render(){ 
  
      return (
        <Switch>
            <Route exact path="/" component={HomeM}/>

            <Route exact path="/home" component={HomeM}/>
            <Route path="/needknow" component={NeedKnow}/>
            <Route path="/paychange" component={PayChangeM}/>
            <Route path="/pay" component={PayM}/>
            <Route path="/class" component={ClassDetailM}/>
        </Switch>   
      )
    } 
 }

export default App