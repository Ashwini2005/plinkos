class Divisions{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.h=h
        this.w=w

        World.add(myWorld,this.body);

    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        Fill ("white");
        rect(pos.x,pos.y,this.w,this.h);

    }
};