export default class Circle {
    constructor(public radius: number) {}

    area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}