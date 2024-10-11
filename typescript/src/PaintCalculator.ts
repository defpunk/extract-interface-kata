import Rectangle from "./Rectangle";
import Square from "./Square";
import Circle from './Circle';

export default class PaintCalculator {

    static paintFactor = 0.1;

    static calculatePaintRequired(input: Circle | Square | Rectangle): number {
        return input.area() * PaintCalculator.paintFactor;
    }
}
