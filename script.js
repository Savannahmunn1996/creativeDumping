const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 900;
console.log(ctx)


ctx.lineWidth=12;
ctx.strokeStyle= "green";


class Line {
    constructor(canvas){
        this.canvas= canvas;
        this.startX =Math.random() * canvas.width;
        this.startY = Math.random() * canvas.height;
        this.endX = Math.random() * canvas.width;
        this.endY = Math.random() * canvas.height;
        this.lineWidth = Math.floor(Math.random() * 15+1);
        this.hue = Math.floor(Math.random()* 360);
    }
    draw(context){
        context.strokeStyle="hsl(" + this.hue +", 100%, 50%)"
        context.beginPath();
        context.moveTo(this.startX, this.startY);
        context.lineTo(this.endX, this.endY);
        context.stroke();
    }
}

const lineArray =[];
const numLines = 60;
for(let i = 0;i<numLines; i++){
    lineArray.push(new Line(canvas));
}


lineArray.forEach(line => line.draw(ctx));


