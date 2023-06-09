class Life extends Circle{
	constructor(x, y, velX, velY, raio, img, sound){
		super(x, y, raio, img)

		this.angle = 0
		this.velX = velX
		this.velY = velY
		this.sound = sound

		sound.onended = function(){
	        this.src = "";
	        this.srcObject = null;
	        this.remove();
	    };
	}

	draw(ctx){
		ctx.drawImage(this.img, this.centerX(), this.centerY(), this.diameter(), this.diameter())
	}

	update(cnv){
		this.x += this.velX
		this.y += this.velY
	}
}
