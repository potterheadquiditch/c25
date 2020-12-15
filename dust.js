class dust{
    constructor(x,y,width,height){
         var options={
              isStatic: true 
              //restitution:0.3, 
              //friction:0.5, 
              //density:1.2 
           } 
           this.image=loadImage("dustbingreen.png")
           this.body=Bodies.rectangle(x,y,width,height,options);
            this.x=x; 
            this.y=y; 
            this.width=width; 
            this.height=height;

            } display(){ 
                var pos=this.body.position;
                imageMode(CENTER);
                 image(this.image,pos.x,pos.y,this.width, this.height); 
               } 
           }