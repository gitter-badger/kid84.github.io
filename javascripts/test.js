(function() {
  var cody, test;

  test = (function() {
    function test() {}

    test.prototype.constraction = function(living, age, gender) {
      this.living = living;
      this.age = age;
      this.gender = gender;
      return this.getGender(function() {
        return this.gender;
      });
    };

    return test;

  })();

  cody = new test(true, 33, 'male');

  console.log(cody);

}).call(this);
