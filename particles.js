Class particles{
    constructor(x,y) {
      var options = {
          isStatic: false;
      }
      this.Body=Bodies.Circle(x,y,this.r,options)
      this.color= color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);
    }
  };