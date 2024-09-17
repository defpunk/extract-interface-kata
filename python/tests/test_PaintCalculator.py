import unittest
from example.PaintCalculator import PaintCalculator
from example.Shapes import Rectangle, Square, Circle

class PaintCalculatorTest(unittest.TestCase):
    def test_paint_required_for_rectangle(self):
        rectangle = Rectangle(5, 10)
        calculator = PaintCalculator()
        paint_required = calculator.calculate_paint_required(rectangle)
        self.assertEqual(5.0, paint_required, "Paint required for rectangle should be 5")

    def test_paint_required_for_square(self):
        square = Square(5)
        calculator = PaintCalculator()
        paint_required = calculator.calculate_paint_required(square)
        self.assertEqual(2.5, paint_required, "Paint required for square should be 2.5")

    def test_paint_required_for_circle(self):
        circle = Circle(5)
        calculator = PaintCalculator()
        paint_required = calculator.calculate_paint_required(circle)
        self.assertEqual(7.85, round(paint_required, 2), "Paint required for circle should be 7.85")

if __name__ == "__main__":
    unittest.main()
