//% blockNamespace=Vector color="#F56600"
class Vector {
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    public xCoordinate(): number{
        return this.x;
    }
    
    public yCoordinate(): number{
        return this.y;
    }

    public setX(x: number){
        this.x = x;
    }

    public setY(y: number){
        this.y = y;
    }

    public print(){
        console.log(this.x + ", " + this.y);
    }
}

//% color="#F56600" 
//% weight=0
namespace Vector{

    //% block="create vector x $x, y $y"
    //% blockSetVariable=vector
    //% weight=100
    export function createVector(x: number, y: number){
        return new Vector(x, y)
    }

    //% block="vector one $vector1 plus vector two $vector2"
    export function vectorAdd(vector1: Vector, vector2: Vector): Vector{
        return new Vector(vector1.xCoordinate() + vector2.xCoordinate(), vector1.yCoordinate() + vector2.yCoordinate());
    }

    //% block="vector one $vector1 minus vector two $vector2"
    export function vectorSub(vector1: Vector, vector2: Vector): Vector{
        return new Vector(vector1.xCoordinate() - vector2.xCoordinate(), vector1.yCoordinate() - vector2.yCoordinate());
    }

    //% block="vector one $vector1 times vector two $vector2"
    export function vectorMultiplication(vector1: Vector, vector2: Vector): Vector{
        return new Vector(vector1.xCoordinate() * vector2.xCoordinate(), vector1.yCoordinate() * vector2.yCoordinate());
    }
    //% block="magnitude of vector $vector"
    export function vectorMagnitude(vector: Vector): number{
        return Math.sqrt((vector.xCoordinate() * vector.xCoordinate()) + (vector.yCoordinate() * vector.yCoordinate()));
    }

    //% block="scale vector $vector by $num"
    export function vectorScale(vector: Vector, num: number): Vector{
        return new Vector(vector.xCoordinate() * num, vector.yCoordinate() * num);
    }

    //% block="dot product of vector one $vector1 and vector two $vector2"
    export function dotProduct(vector1: Vector, vector2: Vector): number{
        let mulVec = vectorMultiplication(vector1, vector2);
        return (mulVec.xCoordinate() + mulVec.yCoordinate());
    }

    //% block="distance between vector one $vector1 and vector two $vector2"
    export function euclideanDistance(vector1: Vector, vector2: Vector): number{
        let tempVec = vectorSub(vector1, vector2);
        return ((tempVec.xCoordinate() * tempVec.xCoordinate()) + (tempVec.yCoordinate() * tempVec.yCoordinate()));
    }

    //Print the vector coordinate's via the console
    //% block="print vector $vectorPrint"
    export function printVector(vectorPrint: Vector){
        vectorPrint.print();
    }

}
