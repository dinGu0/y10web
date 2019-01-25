function Tank(x,y){
    this.x = x;
    this.y = y;
    this.angle;
}

    Tank.prototype.draw = function(){
        context.save();
        context.translate(this.x, this.y);
        context.rotate(this.angle);

        context.fillStyle = 'green';

        context.arc(0,0,30,0,2*Math.PI);
        context.fill();

        context.fillStyle = "red";
        context.fillRect(0,-10,50,20);

        context.restore();
    }

    Tank.prototype.update = function(mouseX, mouseY){
        var dx = mouseX - this.x;
        var dy = mouseY - this.y;
        this.angle = Math.atan2(dy, dx);
}
        
        