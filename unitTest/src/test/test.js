var expect = chai.expect;

describe('Calculator', function(){
	var calc;
	beforeEach(function(){
		calc = new calculator();
	});

	it('should add two numbers', function(){
		expect(calc.add(1,2)).to.equal(3);
	});
	it('should divide two numbers', function(){
		expect(calc.divide(4,2)).to.equal(2);
	});
});