const users = {
    name : "Piyush",
    username : "sayHi",
    password : "pass",
    signin : function (username, password){
        if(username === this.username && password === this.password)
        {
            console.log("Login Successfully")
        } else {
            console.log("Authentication Failed");
        }
    }
}

// users.signin("hiRam", "pass")  // authentication failed
// users.signin("sayHi", "pass")  // login successfully

console.log(users.name);
console.log(users.password);
console.log(users.signin);