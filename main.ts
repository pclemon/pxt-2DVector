//% blockNamespace=Vector color="#F56600"
class Vector {
    x: Fx8;
    y: Fx8;

    constructor(x: Fx8, y: Fx8){
        this.x = x;
        this.y = y;
    }

    public xCoordinate(): Fx8{
        //return Fx.toInt(this.x);
        return this.x;
    }
    
    public yCoordinate(): Fx8{
        //return Fx.toInt(this.y);
        return this.y;
    }

    public print(){
        console.log(Fx.toFloat(this.x) + ", " + Fx.toFloat(this.y));
    }
}

//% color="#F56600" 
//% weight=0
namespace Vector{

    //% block="create vector x $x, y $y"
    //% blockSetVariable=vector
    //% weight=100
    export function createVector(x: number, y: number){
        return new Vector(Fx8(x), Fx8(y));
        //return new Vector(x, y);
    }

    //% block="vector one $vector1 plus vector two $vector2"
    export function vectorAdd(vector1: Vector, vector2: Vector): Vector{
        return new Vector(Fx.add(vector1.xCoordinate(),vector2.xCoordinate()), Fx.add(vector1.yCoordinate(), vector2.yCoordinate()));
    }

    //% block="vector one $vector1 minus vector two $vector2"
    export function vectorSub(vector1: Vector, vector2: Vector): Vector{
        return new Vector(Fx.sub(vector1.xCoordinate(), vector2.xCoordinate()), Fx.sub(vector1.yCoordinate(), vector2.yCoordinate()));
    }

    //% block="vector one $vector1 times vector two $vector2"
    export function vectorMultiplication(vector1: Vector, vector2: Vector): Vector{
        return new Vector(Fx.mul(vector1.xCoordinate(), vector2.xCoordinate()), Fx.mul(vector1.yCoordinate(), vector2.yCoordinate()));
    }

    //% block="magnitude of vector $vector"
    export function vectorMagnitude(vector: Vector): number{
        return Math.sqrt(Fx.toFloat(Fx.add(Fx.mul(vector.xCoordinate(), vector.xCoordinate()), Fx.mul(vector.yCoordinate(), vector.yCoordinate()))));
    }

    //% block="scale vector $vector by $num"
    export function vectorScale(vector: Vector, num: number): Vector{
        return new Vector(Fx.mul(vector.xCoordinate(), Fx8(num)), Fx.mul(vector.yCoordinate(), Fx8(num)));
    }

    //% block="dot product of vector one $vector1 and vector two $vector2"
    export function dotProduct(vector1: Vector, vector2: Vector): number{
        let mulVec = vectorMultiplication(vector1, vector2);
        return (Fx.toFloat((Fx.add(mulVec.xCoordinate(), mulVec.yCoordinate()))));
    }

    //% block="distance between vector one $vector1 and vector two $vector2"
    export function euclideanDistance(vector1: Vector, vector2: Vector): number{
        let tempVec = vectorSub(vector1, vector2);
        return Math.sqrt((Fx.toFloat(Fx.add(Fx.mul(tempVec.xCoordinate(), tempVec.xCoordinate()), Fx.mul(tempVec.yCoordinate(), tempVec.yCoordinate())))));
    }

    //Print the vector coordinate's via the console
    //% block="print vector $vectorPrint"
    export function printVector(vectorPrint: Vector){
        //console.log(vectorPrint.xCoordinate() + ", " + vectorPrint.yCoordinate());
        vectorPrint.print();
    }

}