class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("Images/Enemy.png");
  }
  display(){
    console.log(this.body.speed)
    if(this.body.speed>1){
      lives=lives-1
    }
    super.display();
  }
};
