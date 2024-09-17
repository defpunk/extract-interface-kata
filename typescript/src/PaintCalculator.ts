import Rectangle from "./Rectangle";
import Square from "./Square";
import Circle from './Circle'
;

export default class PaintCalculator {
    
    static paintFactor = 0.1;

    static calculatePaintRequiredForRectangle(rectangle: Rectangle): number {
        return rectangle.area() * PaintCalculator.paintFactor;
    }

    static calculatePaintRequiredForSquare(square: Square): number {
        return square.area() * PaintCalculator.paintFactor;
    }

    static calculatePaintRequiredForCircle(circle: Circle): number {
        return circle.area() * PaintCalculator.paintFactor;
    }
}
