export default class Rectangle {
    constructor(public width: number, public height: number) {}

    area(): number {
        return this.width * this.height;
    }
}