class Ground{
    constructor(x,y,width,height){
let options ={
    isStatic:true
}

        this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body)
    }
display(){
let pos = this.body.position
//let angle = this.body.angle
translate(pos.x,pos.y)
//rotate(angle)
rectMode(CENTER)
fill("brown")
rect(0,0,this.width,this.height)
}
}