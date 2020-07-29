//% blockNamespace=Vector color="#F56600"
//%groups='["Create", "Basic Functions", "Debugging"]'

//% color="#F56600" 
//% weight=0
namespace Vector{
    export class Vector {
        _x: Fx8;
        _y: Fx8;

        constructor(_x: Fx8, _y: Fx8) {
            this._x = _x;
            this._y = _y;
        }

        //Converts the _x and _y fields to floats
        public get x(): number{
            return Fx.toFloat(this._x);

        }

        public get y(): number{
            return Fx.toFloat(this._y);

        }

        public set x(val: number){
            this._x = Fx8(val);
        }

        public set y(val: number){
            this._y = Fx8(val);
        }

        //Print the vector coordinate's via the console
        //% block="print vector $this(vector)"
        //% group="Debugging"
        public printVector() {
            console.log(this.x + ", " + this.y);
        }

        //% block="scale vector $this(vector) by $num"
        //% group="Basic Functions"
        public vectorScale(num: number){
            this._x = Fx.mul(this._x, Fx8(num));
            this._y = Fx.mul(this._y, Fx8(num));
        }

        //% block="magnitude of vector $this(vector)"
        //% group="Basic Functions"
        public vectorMagnitude(): number {
            return Math.sqrt(Fx.toFloat(Fx.add(Fx.mul(vector._x, vector._x), Fx.mul(vector._y, vector._y))));
        }
    }

    //% block="create vector x $x, y $y"
    //% blockSetVariable=vector
    //% weight=100
    //% group="Create"
    export function createVector(x: number, y: number){
        return new Vector(Fx8(x), Fx8(y));
    }

    //% block="vector one $vector1 plus vector two $vector2"
    //% group="Basic Functions"
    export function vectorAdd(vector1: Vector, vector2: Vector): Vector{
        return new Vector(Fx.add(vector1._x,vector2._x), Fx.add(vector1._y, vector2._y));
    }

    //% block="vector one $vector1 minus vector two $vector2"
    //% group="Basic Functions"
    export function vectorSub(vector1: Vector, vector2: Vector): Vector{
        return new Vector(Fx.sub(vector1._x, vector2._x), Fx.sub(vector1._y, vector2._y));
    }

    //% block="vector one $vector1 times vector two $vector2"
    //% group="Basic Functions"
    export function vectorMultiplication(vector1: Vector, vector2: Vector): Vector{
        return new Vector(Fx.mul(vector1._x, vector2._x), Fx.mul(vector1._y, vector2._y));
    }


    //% block="dot product of vector one $vector1 and vector two $vector2"
    //% group="Basic Functions"
    export function dotProduct(vector1: Vector, vector2: Vector): number{
        let mulVec = vectorMultiplication(vector1, vector2);
        return (Fx.toFloat((Fx.add(mulVec._x, mulVec._y))));
    }

    //% block="distance between vector one $vector1 and vector two $vector2"
    //% group="Basic Functions"
    export function euclideanDistance(vector1: Vector, vector2: Vector): number{
        let tempVec = vectorSub(vector1, vector2);
        let temp = Math.abs(Fx.toFloat(Fx.add(Fx.mul(tempVec._x, tempVec._x), Fx.mul(tempVec._y, tempVec._y))));
        return temp;
    }
}