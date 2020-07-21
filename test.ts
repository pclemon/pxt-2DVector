let vector = Vector.createVector(-1.4, 5)
let vector2 = Vector.createVector(4.6, 8)
Vector.printVector(Vector.vectorAdd(vector, vector2)) //3.2, 13
Vector.printVector(Vector.vectorSub(vector, vector2)) //-6, -3
Vector.printVector(Vector.vectorMultiplication(vector, vector2)) //-6.44, 40
vector2.vectorScale(5) //23, 40
console.log(Vector.vectorMagnitude(vector)) //5.19230
console.log(Vector.dotProduct(vector, vector2)) //33.56
console.log(Vector.euclideanDistance(vector, vector2))//6.708204
