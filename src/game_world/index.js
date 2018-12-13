import React, { Component } from 'react';
import Player from './Player';
import {loadGame} from './../actions/index.js';
import {connect} from 'react-redux';

class GameWorld extends Component {
  constructor(){
    super()
    this.state= {
        width: 12,
        heigth: 12
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
}
   
handleChange(e){
console.log(e);

this.setState({
    [e.target.name]: e.target.value
})
}
validate(obj){
    let obKey = Object.keys(obj);
    obKey.map((key,index)=>{
        if (obj[key] === null || obj[key] === ''){
           return alert(`enter ${key}`)
        }
    })
    return true
}
handleSubmit(state){
    if (this.validate(state)){
        return this.props.loadGame(state.width , state.heigth)
    }
 
} 
  render() {
    if (this.props.playerPosition.length <2) {
          return(
              <div>
                  <form onSubmit={(e)=>{
                      e.preventDefault();
                      this.handleSubmit(this.state)}}>
                  <div>
                    <h3>Please enter board width </h3>
                    <input name='width' value={this.state.width} onChange={this.handleChange}  type='number' placeholder='WIdth'/>
                  </div>
                  <div>
                    <h3>Please enter board heigth </h3>
                    <input name='heigth' type='number' value={this.state.heigth} onChange={this.handleChange} placeholder='heigth'/>
                  </div>
                    <div>
                    <input type='submit' onClick={(e)=>{
                      e.preventDefault();
                      this.handleSubmit(this.state)}} />
                  </div>
                  </form>
            </div>
          )
          }else{
               return (
      <div>
            
        <Player/>
      </div>
    )
          } 
 
  }
};


const mapStateToProps = (state) => {
  return {
    ...state.player
  }
}
export default connect(mapStateToProps,{loadGame})(GameWorld);
