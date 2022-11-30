const Triangle = require('../src/triangle').Triangle;
const expect = require('chai').expect;

describe('Testing the Triangle Functions', function() {
    it('1. The side length of the Triangle', function(done) {
        let c1 = new Triangle(2, 0, 3, 3);
        expect(c1.getAllLength()).to.equal(8);
        done();
    });
    
    it('2. The surface area of the Triangle', function(done) {
        let c2 = new Triangle(5, 5, 0, 0);
        expect(c2.getSurfaceArea()).to.equal(12.5);
        done();
    });
    
    it('3. Test if triangle is isoceles', function(done) {
        let c3 = new Triangle(2, 0, 3, 3);
        expect(c3.getType()).to.equal("isoceles");
        done();
    });

    it('4. Get base', function(done) {
        let c3 = new Triangle(2, 0, 3, 7);
        expect(c3.getBase()).to.equal(2);
        done();
    });
    
});