class rope{
    constructor(bodyA,bodyB){
var options={
    bodyA:bodyA,
    bodyB:bodyB,
stiffness:0.05,
length:10}
this.rope=Matter.Constraint.create(options)
World.add(world,this.rope)

}
display(){
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)
}
}