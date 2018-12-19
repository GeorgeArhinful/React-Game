import React, { Component } from 'react';
import {playerPositionChanged ,loadGame} from './../../actions/index.js';
import {connect} from 'react-redux';
import mario from './../../image/Mario.png';
import mashroom from './../../image/mashroom.ico';


class Player extends Component {  
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        return this.props.loadGame(1 , 1);
} 
  render() {
      if (this.props.mashrooms === 0) {
        alert(`
        Game over.
        you made ${this.props.movement} moves
        reload the page to start an new Game
        `);
    }
   if (this.props.playerPosition !== null){
           return(
           <div>
               <div style={{padding:'15px auto'}}><h1>moves: {this.props.movement}</h1></div>
               <table>
                   <tbody>
                     {
               
                this.props.playerPosition.map((item,value) => {
            return <tr key={value}>{item.map((itemValue, index)=>{
                if (itemValue === 0){
                    return <td key={index+itemValue+value}>{' '}</td>
                } else if (itemValue === 1) {
                     return <td key={index+itemValue+'mashroom'+value}><img  src={mashroom}/></td>
                } else if(itemValue === 2) {
                    return <td key={index+itemValue+value+'mario'} ><img src={mario}/></td>  
                }else{
                    return <td key={index+itemValue+value+'mario'} >{' '}</td>  
                }
            })}
            </tr>
        })

               }

               </tbody>
               </table>
             
           </div>
           )
       }


  }
}
const mapStateToProps = (state)=>{
    return{
        ...state.player
    }
}

export default connect(mapStateToProps, {loadGame})(playerPositionChanged(Player))
