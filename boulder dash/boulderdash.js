class Boulderdash{
    constructor(canvasId) {


        this.tiles = []
        this.tilesSize = 32
        this.tilesRows = 22
        this.tilesInRow = 40

        this.intializeCanvas(canvasId)
        this.generateLevel()
        this.renderLevel()
    }
    loadSprite(){
        this.tilesSprite = new Image()
        this.tilesSprite.scr = './sprites.png'
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
            this.tileSize,
            )
            }
        }
    }
       // 1. wygenerować poziom
    generateLevel(){
        for (let y = 0; y < this.tilesRows; y++){
            const row = []
            for (let x = 0; x < this.tilesInRow; x++){
                const rand = Math.floor(Math.random() *5)
                let randTileType
                switch (rand){
                    case 0:
                        randTileType = TilesProperties.empty.type
                        break
                    case 1:
                        randTileType = TilesProperties.sand.type
                        break
                    case 2:
                        randTileType = TilesProperties.stone.type
                        break
                    case 3:
                        randTileType = TilesProperties.wall.type
                        break
                    case 4:
                        randTileType = TilesProperties.diamond.type
                        break        
                    }
                const tile = new Tile(randTileType)
                row.push(tile)
            }
            this.tiles.push(row)
        }
    }
}