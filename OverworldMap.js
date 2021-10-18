class OverworldMap{
    constructor(config){
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc
        
        this.upperImage = new Image();
    }
    
    drawLowerImage(ctx){
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    drawUpperImage(ctx){
        ctx.drawImage(this.upperImage, 0, 0);
    }

}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "/images/maps/DemoLower.png",
        upperSrc: "/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled : true,
                x: utils.widthGrid(5),
                y: utils.widthGrid(6),

            }),
            npc1: new Person({
                x: utils.widthGrid(7),
                y: utils.widthGrid(9),
                src: "/images/characters/people/npc1.png"
            })
        }
    },
    Kitchen: {
        lowerSrc: "/images/maps/KitchenLower.png",
        upperSrc: "/images/maps/KitchenUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 5,
                y: 6
            }),
            npc1: new GameObject({
                x: 7,
                y: 9,
                src: "/images/characters/people/npc2.png"
            }),
            npc2: new GameObject({
                x: 7,
                y: 4,
                src: "/images/characters/people/npc3.png"
            })
        }
    }
} 