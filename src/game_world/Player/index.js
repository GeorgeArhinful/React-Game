import React, { Component } from 'react';
import {playerPositionChanged} from './../../actions/index.js';
import {connect} from 'react-redux';
import mario from './../../image/Mario.png';
import mashroom from './../../image/mashroom.ico';


class Player extends Component {  

  render() {
      if (this.props.mashrooms === 0) alert(`you made ${this.props.movement} moves`)
   if (this.props.playerPosition !== null){
           return(
           <div>
               <div style={{padding:'15px auto'}}>{this.props.movement}</div>
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
    console.log(state);
    return{
        ...state.player
    }
}

export default connect(mapStateToProps, {playerPositionChanged})(playerPositionChanged(Player))
