define(['./model'], function(Model){

    class GameModel extends Model{

        constructor(){
            super()
            this.modelName = 'Match'
            this.blackList = ['board', 'whiteOffset', 'tempArmy','curMoveNum']
            // dummy ID for now - will have to figure out how this is generated
            this.data = {
                id: 123,
                time: new Date(),
                userId: 'guest',
                opponent: 'ai',
                userHandicap: "black has first move",
                boardSize: 9,
                moveLog: [],
                whiteScore: 0,
                blackScore: 0,
                userColour: 'black'
            }
            
        }    
    }
    
    var gameModel = new GameModel()
    
    return gameModel
})