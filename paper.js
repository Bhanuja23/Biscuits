class Paper
{
	constructor(x,y,r)
	{
		var options={
			restitution:0.5,
            friction:0.5,
            density:1		
			}
		this.x=x;
		this.y=y;
		this.r=r
        this.image=loadImage("paper.png")
		this.body=Bodies.circle(x, y,r,options);
 		World.add(world, this.body);

	}
	display()
	{
			console.log(this.body.position)
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(RADIUS)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}