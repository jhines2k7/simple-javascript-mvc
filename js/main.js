require(['models/user'], function(User){
    var users = [
        new User('Barney'),
        new User('Cartman'),
        new User('Sheldon')
    ];

    for(var i = 0; i < users.length; i++ ) {
        console.log(users[i].name);
    }

    localStorage.users = JSON.stringify(users);
});