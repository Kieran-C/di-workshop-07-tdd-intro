var chai = require('chai')
var expect = chai.expect

var Coolculator = require('../lib/coolculator')

describe('Coolculator', function() {
  mm = new Coolculator()

  it('should add', function() {
    result = mm.add(2, 3)
    expect(result).to.equal(5)
  })

  it('should multiply', function() {
    result = mm.multiply(2, 3)
    expect(result).to.equal(6)
  })

  it('should subtract', function() {
    result = mm.subtract(3, 2)
    expect(result).to.equal(1)
  })

  it('should divide',function() {
    result = mm.divide(10, 2)
    expect(result).to.equal(5)
  })
  it('should highest' , function() {
    result = mm.highest(54,23)
    expect(result).to.equal(54)
  })
  it('should lowest', function() {
    result = mm.lowest(546,56)
    expect(result).to.equal(56)
  })
  it('should double', function() {
    result = mm.double(30)
    expect(result).to.equal(60)
  })
  it('should square', function() {
    result = mm.square(5)
    expect(result).to.equal(25)
  })
  it('should raise', function() {
    result = mm.raise(5,3)
    expect(result).to.equal(125)
  })
  it('should isNegative', function() {
    result = mm.isNegative(-4)
    expect(result).to.equal(true)
  })
  it('should isPositive', function() {
    result = mm.isPositive(-5)
    expect(result).to.equal(false)
  })
  it('should is cool', function() {
    result = mm.isCool(1331)
    expect(result).to.equal(true)
  })
  it('should sum', function() {
    result = mm.sum([1,2,3,4,5])
    expect(result).to.equal(15)
  })
  it('should multipleArray',function() {
    result = mm.mulitplyArray([2,4,3])
    expect(result).to.equal(24)
  })
  it('should mean', function() {
    result = mm.mean([5,10,15,20])
    expect(result).to.equal(12.5)
  })
  it('should factorial', function() {
    result = mm.factorial(3)
    expect(result).to.equal(6)
  })
  it('should random', function(){
    result = mm.random(50)
    expect(result).to.be.at.least(0).and.to.be.at.most(50)
  })
})
