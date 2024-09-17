import Rectangle from './Rectangle';
import Square from './Square';
import Circle from './Circle';
import PaintCalculator from './PaintCalculator';

describe('PaintCalculator', () => {
    it('testPaintRequiredForRectangle', () => {
        const rectangle = new Rectangle(5, 10);
        const expectedResult = 5;

        const actualResult = PaintCalculator.calculatePaintRequiredForRectangle(rectangle);

        expect(actualResult).toEqual(expectedResult);
    });

    it('testPaintRequiredForSquare', () => {
        const square = new Square(5);
        const expectedResult = 2.5;

        const actualResult = PaintCalculator.calculatePaintRequiredForSquare(square);

        expect(actualResult).toEqual(expectedResult);
    });

    it('testPaintRequiredForCircle', () => {
        const circle = new Circle(5);
        const expectedResult = 7.85;

        const actualResult = PaintCalculator.calculatePaintRequiredForCircle(circle);

        expect(actualResult).toBeCloseTo(expectedResult, 2);
    });
});
