class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.Visibility = true;
      if(this.body.speed<3){
        this.Visibility = true;
      }else{
        this.Visibility = false;
      }

      
    }
  
  };
  