from example.Shapes import Rectangle, Square, Circle

class PaintCalculator:
    PAINT_FACTOR = 0.1

    def calculate_paint_required(self, shape):
        if isinstance(shape, Rectangle):
            return shape.area() * PaintCalculator.PAINT_FACTOR
        elif isinstance(shape, Square):
            return shape.area() * PaintCalculator.PAINT_FACTOR
        elif isinstance(shape, Circle):
            return shape.area() * PaintCalculator.PAINT_FACTOR