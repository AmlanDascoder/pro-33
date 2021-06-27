class Snow {
    constructor(x, y) {
        var options = {
            'restituition' : 0.1,
            isStatic:false
        }
        this.snow = Bodies.circle(x, y, 20, options);
        World.add(world, this.snow);
    } 
    update() {
        if(this.snow.position.y>height) {
            Matter.Body.setPosition(this.snow, {x:random (0, 800), y:random(0, 20)})
        }
    }
    display() {
        imageMode (CENTER)
        image (snowImg, this.snow.position.x, this.snow.position.y, 20, 20);

    }
}
    
