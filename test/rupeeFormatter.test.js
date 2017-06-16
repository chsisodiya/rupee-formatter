var assert = require('assert');
import rupeeFormatter from "..";

describe('Testing', function() {
  it('All test case must passing', function() {
    assert.equal(rupeeFormatter("1"), "₹ 1");
    assert.equal(rupeeFormatter("100"), "₹ 100");
    assert.equal(rupeeFormatter("1400"), "₹ 1,400");
    assert.equal(rupeeFormatter(1400), "₹ 1,400");
    assert.equal(rupeeFormatter("1400.67"), "₹ 1,400.67");
    assert.equal(rupeeFormatter("14000.67"), "₹ 14,000.67");
    assert.equal(rupeeFormatter(14000.67), "₹ 14,000.67");
    assert.equal(rupeeFormatter("14000"), "₹ 14,000");
    assert.equal(rupeeFormatter("174000"), "₹ 1,74,000");
    assert.equal(rupeeFormatter("1753676545643.345434"), "₹ 17,53,67,65,45,643.345434");
    assert.equal(rupeeFormatter(""), "₹ -");
  });
});
