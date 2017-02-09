var expect = require('chai').expect;

var store = require ('../src/store').store;

describe('Store', function() {

  it('with toString() should return a string', function() {
    expect(store.toString()).to.be.a('string');
  });

  it('should return all these products', function() {
    expect(store.products).to.have.lengthOf(14);
  });

  it('with belowCost criteria should return right products', function() {
    expect(store.findProducts(20)).to.have.lengthOf(9);
  });

  it('with criteria should return right products', function() {
    var criteria = {belowCost: 20, belowDuration: 150};
    expect(store.findProducts(criteria)).to.have.lengthOf(9);
  });

  it('with asket should return right price', function() {
    expect(store.calculateTotalprice([
      store.products[3],
      store.products[5],
      store.products[6],
      store.products[10]])).to.be.equal(99.22);
  });

//Tests on duration
  it('for DVD duration', function() {
    expect(store.products[5].getDuration()).to.be.equal(',duration : 124 minutes');
  });

  it('for Book duration', function() {
    expect(store.products[0].getDuration()).to.be.equal(',duration : between 80 minutes and 200 minutes');
  });

  it('for Videogame duration', function() {
    expect(store.products[12].getDuration()).to.be.equal(',duration : between 300 minutes and 1800 minutes');
  });

});
