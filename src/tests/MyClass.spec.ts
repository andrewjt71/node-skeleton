import MyClass from '../services/MyClass'

/**
 * propertyValueCalculator module tests.
 *
 * Expected results were calculated, and checked using an online compound interest calculator
 * e.g. https://www.thecalculatorsite.com/finance/calculators/compoundinterestcalculator.php.
 *
 * @group unit
 */
describe('MyClass', () => {
    test('returnHelloWorld returns the string Hello World', async () => {
        const myClass = new MyClass();

        expect(myClass.returnHelloWorld()).toEqual('Hello World');
    })
});
