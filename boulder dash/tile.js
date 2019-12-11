<<<<<<< HEAD
class Tile{
    constructor(type){
        if (!type){
            throw new Error ('You must provide a Tile Type')
        }
        this.type = type
        this.setSpritePosition(type)
    }
    setSpritePosition(type){
        this.spriteXPos = TilesProperties[type].spriteXPos
        this.spriteYPos = TilesProperties[type].spriteYPos
    }
=======
class Tile{
    constructor(type){
        if (!type){
            throw new Error ('You must provide a Tile Type')
        }
        this.type = type
        this.setSpritePosition(type)
    }
    setSpritePosition(type){
        this.spriteXPos = TilesProperties[type].spriteXPos
        this.spriteYPos = TilesProperties[type].spriteYPos
    }
>>>>>>> a1e5788454dd7457ba8ca6656c6c9b4a3ea92479
}