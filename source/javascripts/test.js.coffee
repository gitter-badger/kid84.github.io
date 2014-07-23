class test
    constraction:(living,age,gender)->
        this.living = living
        this.age = age
        this.gender = gender
        this.getGender ->
            this.gender
# constraction:(living,age,gender)->
#     this.living = living
#     this.age = age
#     this.gender = gender
#     this.getGender ->
#         this.gender

cody = new test(true, 33, 'male')
console.log(cody)