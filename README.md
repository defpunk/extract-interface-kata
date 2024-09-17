# Example Code for Extract Interface Refacting Kata

Code examples in different languages to support a learning hour on the Extract Interface refactoring.

## Exercise

The PaintCalculator class calculates the amount of paint needed for various shapes. We want to add a new shape to the catalog we support, but we notice duplication in the PaintCalculator class, making it difficult to maintain. Also, the tests rely on specific shape implementations, complicating the verification of the paint calculation logic.

Use the Extract Interface refactoring technique to create an AreaCalculator interface, which all shapes will implement. Then update the PaintCalculator class to use this interface before introducing a fake shape to test the paint calculation logic, ensuring that it works correctly without depending on specific shape implementations.
