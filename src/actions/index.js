import store from './../config/store'





export const loadGame =(col ,row)=>{
  
  return  {
      type:'LOAD_GAME',
      payload:{
          col,
          row
      }
  }
}




export const playerPositionChanged = (component) => {
     function createPosition(value) {
         let oldInitialPosition = store.getState().player.initialPosition;
         let oldPlayerPosition = store.getState().player.playerPosition;
         let currentPlayerPosition = oldPlayerPosition;
         let col = store.getState().player.col;
         let row = store.getState().player.row;
         let movement = store.getState().player.movement;
        


        function countMashrooms(gameWorl){
        let mashroomsNum = 0
        for (let i = 0; i < gameWorl.length; i++) {
            for (let x = 0; x < gameWorl[i].length; x++) {
                if (gameWorl[i][x]=== 1){
                    mashroomsNum ++;
                }
            }
        }
        return mashroomsNum;
    };



        switch (value) {
            case 'SOUTH':
                oldPlayerPosition[oldInitialPosition[0]][oldInitialPosition[1]] = 0;
                 if (oldInitialPosition[0] + 1 !== row) {
                     currentPlayerPosition[oldInitialPosition[0] + 1][oldInitialPosition[1]] = 2;
                     return {
                         initialPosition: [oldInitialPosition[0] + 1, oldInitialPosition[1]],
                         playerPosition: currentPlayerPosition,
                         row,
                         col,
                         movement: movement + 1
                     };
                 } else if (oldInitialPosition[0] + 1 > row-1) {
                    currentPlayerPosition[row - 1][oldInitialPosition[1]] = 2;
                return {
                    initialPosition: [row - 1, oldInitialPosition[1]],
                    playerPosition: currentPlayerPosition,
                     row,
                     col,
                     movement: movement + 1 
                };   
            }

            case 'NORTH':
                oldPlayerPosition[oldInitialPosition[0]][oldInitialPosition[1]] = 0;
                if (oldInitialPosition[0] - 1  < 1) {
                    currentPlayerPosition[0][oldInitialPosition[1]] = 2;
                    return {
                        initialPosition: [0, oldInitialPosition[1]],
                        playerPosition: currentPlayerPosition,
                         row,
                         col,
                         movement: movement + 1,
                         mashrooms: countMashrooms(currentPlayerPosition)
                    };
                } else {
                    currentPlayerPosition[oldInitialPosition[0] - 1][oldInitialPosition[1]] = 2;
                return {
                    initialPosition: [oldInitialPosition[0] - 1, oldInitialPosition[1]],
                    playerPosition: currentPlayerPosition,
                     row,
                     col,
                     movement: movement + 1,
                     mashrooms: countMashrooms(currentPlayerPosition)
                    
                };
            }

             case 'EAST':
                oldPlayerPosition[oldInitialPosition[0]][oldInitialPosition[1]] = 0;
                if (oldInitialPosition[1] + 1 !== col) {
                    currentPlayerPosition[oldInitialPosition[0]][oldInitialPosition[1] + 1] = 2;
                  return {
                      initialPosition: [oldInitialPosition[0], oldInitialPosition[1] + 1],
                      playerPosition: currentPlayerPosition,
                      row,
                      col,
                      movement: movement + 1,
                      mashrooms: countMashrooms(currentPlayerPosition)
                  };
                } else if (oldInitialPosition[1] + 1 > col - 1) {
                    currentPlayerPosition[oldInitialPosition[0]][col - 1] = 2;
                    return {
                    initialPosition: [oldInitialPosition[0], col - 1],
                    playerPosition: currentPlayerPosition,
                     row,
                     col,
                     movement: movement+ 1,
                     mashrooms: countMashrooms(currentPlayerPosition)
                };
                }
       
                
            case 'WEST':
                oldPlayerPosition[oldInitialPosition[0]][oldInitialPosition[1]] = 0;
                currentPlayerPosition[oldInitialPosition[0]][oldInitialPosition[1] - 1] = 2;
                if (oldInitialPosition[1] - 1 < 1){
                    currentPlayerPosition[oldInitialPosition[0]][0] = 2;
                   return {
                       initialPosition: [oldInitialPosition[0], 0],
                       playerPosition: currentPlayerPosition,
                        row,
                        col,
                        movement: movement+ 1,
                        mashrooms: countMashrooms(currentPlayerPosition)
                   };
                }else{
                    currentPlayerPosition[oldInitialPosition[0]][oldInitialPosition[1] - 1] = 2;
                return {
                    initialPosition: [oldInitialPosition[0], oldInitialPosition[1] - 1],
                    playerPosition: currentPlayerPosition,
                     row,
                     col,
                     movement: movement + 1,
                     mashrooms: countMashrooms(currentPlayerPosition)
                };
            }
           
            default:
              
               
        }
    }



    function setPosition(value){
        store.dispatch({
                type: 'PLAYER_MOVE',
                payload: createPosition(value) 
        });
    }


    function handleKeyDown(e){
        e.preventDefault();
        switch (e.keyCode) {
            case  40:
                return setPosition('SOUTH');
            case 39:
                return setPosition('EAST');
            case 38:
                 return setPosition('NORTH');
            case 37:
                 return setPosition('WEST');
            default:
                
        }
    }

    window.addEventListener('keydown',(e)=>{
        handleKeyDown(e);
    });
    return component;
};
