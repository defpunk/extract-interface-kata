using Xunit;
using PaintCalculator;
using System;

namespace PaintCalculator.Tests
{

    public class PaintCalculatorTest
    {
        [Fact]
        public void TestPaintRequiredForRectangle()
        {
            // Arrange
            Rectangle rectangle = new Rectangle(5, 10);
            double expectedResult = 5;

            // Act
            double actualResult = PaintCalculator.CalculatePaintRequiredForRectangle(rectangle);

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Fact]
        public void TestPaintRequiredForSquare()
        {
            // Arrange
            Square square = new Square(5);
            double expectedResult = 2.5;

            // Act
            double actualResult = PaintCalculator.CalculatePaintRequiredForSquare(square);

            // Assert
            Assert.Equal(expectedResult, actualResult);
        }

        [Fact]
        public void TestPaintRequiredForCircle()
        {
            // Arrange
            Circle circle = new Circle(5);
            double expectedResult = 7.85;

            // Act
            double actualResult = PaintCalculator.CalculatePaintRequiredForCircle(circle);

            // Assert
            Assert.Equal(expectedResult, Math.Round(actualResult, 2));
        }
    }


}
