require("should");
var camel = require("../lib/camel_case");

describe("Camel case converter", function() {
    it("leaves lower case as is", function() {
        camel.toUnderscore("stuff").should.equal("stuff");
    });
});
