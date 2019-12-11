class Boulderdash{
    constructor(canvasId) {


        this.tiles = []
        this.tileSize = 32
        this.tilesRows = 22
        this.tilesInRow = 40

        this.intializeCanvas(canvasId)
        this.generateLevel()
        this.loadSprite()
        this.intializeMiner()
        this.subscribeKeyboardEvents()
    }
    loadSprite(){
        this.tilesSprite = new Image()
        this.tilesSprite.src = './sprites.png'
        this.tilesSprite.onload = () =>{
            this.renderLevel()
        }
    }
    intializeCanvas(canvasId){
        if(!canvasId){
            throw new Error ('You have to provide Canvas ID')
        }

        this.canvas = document.querySelector(`#${canvasId}`)
        this.ctx = this.canvas.getContext('2d')
    }
    renderLevel(){
        for (let y = 0; y < this.tilesRows; y++){
            const yPos = y * this.tileSize
            for (let x = 0; x < this.tilesInRow; x++){
            const tile = this.tiles[y][x]
            const xPos = x * this.tileSize
        this.ctx.drawImage(
            this.tilesSprite,
            tile.spriteXPos,
            tile.spriteYPos,
            this.tileSize,
            this.tileSize,
            xPos,
            yPos,
            this.tileSize,
            this.tileSize
            )
                }
                    }
                        }
    subscribeKeyboardEvents(){
        document.addEventListener('keydown', (e) => this.onKeyDown(e))
            }
    onKeyDown(e){
        let xBias, yBias
            switch (e.code){
                case "ArrowDown":
                    xBias = 0
                    yBias = 1
                    break;
                case "ArrowUp":
                    xBias = 0
                    yBias = -1
                    break;
                case "ArrowLeft":
                    xBias = -1
                    yBias = 0
                    break;
                case "ArrowRight":
                    xBias = 1
                    yBias = 0
                    break;
            }
            
            this.updateMinerPos(xBias, yBias)
            this.renderLevel()
        }
        updateMinerPos(xBias, yBias){
            const newXPos =this.miner.xPos + xBias
            const newYPos =this.miner.yPos + yBias
            if (
                newXPos >=0
                && newYPos >=0 &&
                newXPos < this.tilesInRow -1 &&
                newYPos < this.tilesRows -1
                
                )
            this.miner.move(xBias, yBias)
            this.tiles[this.miner.yPos][this.miner.xPos] = this.miner
        }
    intializeMiner(){
        this.miner = new Miner()
        this.tiles[this.miner.yPos] [this.miner.xPos]= this.miner
    }
       // 1. wygenerować poziom
    generateLevel(){
        for (let y = 0; y < this.tilesRows; y++){
            const row = []
            for (let x = 0; x < this.tilesInRow; x++){
                const rand = Math.floor(Math.random() *100)
                let randTileType
                if(rand <15){
                    randTileType = TilesProperties.empty.type
                } else if(rand < 55){
                    randTileType = TilesProperties.sand.type
                } else if(rand < 75){
                    randTileType = TilesProperties.stone.type
                } else if(rand < 90){
                    randTileType = TilesProperties.wall.type
                } else{
                    randTileType = TilesProperties.diamond.type
                }
                const tile = new Tile(randTileType)
                row.push(tile)
            }
            this.tiles.push(row)
        }
    }
}