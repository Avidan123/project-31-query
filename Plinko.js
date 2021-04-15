class Plinko{
constructor(x,y,radius){
var options={
isStatic:true
}
this.body=Bodies.circle(x,y,10,options)
this.radius=radius

World.add(world,this.body)

}
display(){
    var pos =this.body.position
    fill("white")
    ellipseMode(RADIUS)
ellipse(0,0,this.body.radius.x,this.body.radius.y)


}
}