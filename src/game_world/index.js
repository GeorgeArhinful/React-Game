import React, { Component } from 'react';
import Player from './Player';
import {loadGame} from './../actions/index.js';
import {connect} from 'react-redux';

class GameWorld extends Component {
  constructor(){
    super()
    this.state= {
        width: 9,
        heigth: 9
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
              < div className = ' mt-5 text-center mx-auto d-flex p-0 container' style={{minHeight:'100vh'}} >
                  < form className = 'text-center mt-5 col-md-8 col-12 p-0  m-auto'
                  onSubmit = {
                          (e) => {
                      e.preventDefault();
                      this.handleSubmit(this.state)}}>
                  <div>
                    <h4>Please enter board width </h4>
                    <input className=' mx-auto form-control w-50' name='width' value={this.state.width} onChange={this.handleChange}  type='number' placeholder='WIdth'/>
                  </div>
                  <div>
                    <h4 className='pt-4'>Please enter board heigth </h4>
                    <input name='heigth' className=' mx-auto form-control w-50' type='number' value={this.state.heigth} onChange={this.handleChange} placeholder='heigth'/>
                  </div>
                    <div>
                    < input className = 'btn-warning text-light form-control w-25 mx-auto mx-auto mt-5'
                    type = 'submit'
                    onClick = {
                            (e) => {
                      e.preventDefault();
                      this.handleSubmit(this.state)}} />
                  </div>
                  </form>
            </div>
          )
          }else{
               return (
            <div className='world d-flex h-100 w-100' style={{minHeight:'100vh'}}>
            < div className = 'playerWorld m-auto' >
                <Player className=''/>
            </div>
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
