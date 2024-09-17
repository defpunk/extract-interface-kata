import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class PaintCalculatorTest {

    private PaintCalculator paintCalculator = new PaintCalculator();

    @Test
    void calculatePaintRequiredCalculatesCorrectlyWhenShapeIsRectangle() {
        var rectangle = new Rectangle(4, 5);
        assertEquals(2.0, paintCalculator.calculatePaintRequired(rectangle), 0.001);
    }

    @Test
    void calculatePaintRequiredCalculatesCorrectlyWhenShapeIsSquare() {
        var square = new Square(6);
        assertEquals(3.6, paintCalculator.calculatePaintRequired(square), 0.001);
    }

    @Test
    void calculatePaintRequiredCalculatesCorrectlyWhenShapeIsCircle() {
        var circle = new Circle(3);
        assertEquals(2.8274333882308138, paintCalculator.calculatePaintRequired(circle), 0.001);
    }
}
