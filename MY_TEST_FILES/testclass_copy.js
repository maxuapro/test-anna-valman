

function User(email, name) {
    this.email = email
    this.name = name
    this.online = false
    this.login = function () {
        console.log(this.email, 'has logged in!')
    }    
}



var userOne = new User('max@sdf.com', 'Max')
var userTwo = new User('bax@sdf.com', 'Bax')



// console.log(userOne.login())

userOne.login()