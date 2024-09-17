public class PaintCalculator {
    private static final double PAINT_FACTOR = 0.1;

    public double calculatePaintRequired(Rectangle rectangle) {
        return rectangle.area() * PAINT_FACTOR;
    }

    public double calculatePaintRequired(Square square) {
        return square.area() * PAINT_FACTOR;
    }

    public double calculatePaintRequired(Circle circle) {
        return circle.area() * PAINT_FACTOR;
    }
}
