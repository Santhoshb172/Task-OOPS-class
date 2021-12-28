class Circle{
    //CREATING TWO PARAMETERS
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    // TO GET THE RADIUS OF CIRCLE
    getRadius(){
        return parseFloat(this.radius);
    }

    // TO SET THE RADIUS OF THE CIRCLE
    setRadius(radius){
       this.radius = radius;
    }

    // TO GET THE COLOR OF THE CIRCLE
    getColor(color){
        return this.color;
    }

    // TO SET THE COLOR OF THE CIRCLE
    setColor(color){
        this.color = color;
    }

    // BOTH RADIUS AND COLOR OF THE CIRCLE
    toString(){    
        return `${this.radius} ${this.color}`;
    }

    // TO GET THE AREA OF THE CIRCLE
    getArea(){
        return parseFloat(Math.PI * this.radius * this.radius);
    }

    // TO GET THE CIRCUMFERENCE OF THE CIRCLE
    getCircumference (){
        return parseFloat( (2 * Math.PI) * this.radius);
    }
}

var result = new Circle(1.2,"RED");
console.log("toString: "+result.toString());
result.setRadius(12.4);
console.log("getRadius: "+result.getRadius().toFixed(2));
result.setColor("BLUE");
console.log("getColor: "+result.getColor());
console.log("getArea: "+result.getArea().toFixed(2));
console.log("getColor: "+result.getCircumference().toFixed(2));
console.log("toString: "+result.toString());