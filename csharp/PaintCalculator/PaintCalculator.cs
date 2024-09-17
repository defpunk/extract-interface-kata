namespace PaintCalculator
{
    public static class PaintCalculator
    {
        public static double CalculatePaintRequiredForRectangle(Rectangle rectangle)
        {
            return rectangle.Area() * PaintFactor;
        }

        public static double CalculatePaintRequiredForSquare(Square square)
        {
            return square.Area() * PaintFactor;
        }

        public static double CalculatePaintRequiredForCircle(Circle circle)
        {
            return circle.Area() * PaintFactor;
        }

        public const double PaintFactor = 0.1;
    }

}