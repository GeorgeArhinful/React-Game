

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const createWorldMap = (col, row)=>{
    const generateNum = () => (Math.round(Math.random()));
    let playerPosition = [];
    let pRow = getRandomInt(row);
    let pCol = getRandomInt(col)
    let num = null;
    let count = 0
    for (let x = 0; x < row; x++) {
         playerPosition[x] = new Array()
        for (let i = 0; i < col; i++) {
                num = generateNum();
                if (num === 1 && count !== ((row*col)/10)) {
                    playerPosition[x].push(num)
                    count ++
                }else if(num === 1 && count === row){
                   playerPosition[x].push(0)
                }else{
                    playerPosition[x].push(num)
                }
        }

    }
    playerPosition[pRow][pCol] = 2;
    return {
        playerPosition: playerPosition,
        initialPosition : [pRow, pCol],
        row: row,
        col: col,
         movement: 0,
         mashrooms: row,
    }; 
};


const initialState = createWorldMap(1, 1)





export const playerReducer = (state = initialState , action) => {
    switch (action.type) {
         case 'LOAD_GAME':
        return createWorldMap(parseInt(action.payload.col ), parseInt(action.payload.row));
    
        case 'PLAYER_MOVE':
            return {
                playerPosition:action.payload.playerPosition,
                initialPosition: action.payload.initialPosition,
                col: action.payload.col,
                row: action.payload.row,
                movement: action.payload.movement,
                mashrooms: action.payload.mashrooms
            }
        default:
            return state
    }
};