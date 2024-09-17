import Rectangle from "./Rectangle";

export default class Square extends Rectangle {
    constructor(sideLength: number) {
        super(sideLength, sideLength);
    }
}