

let users = require('../data/index.js');

let listUsers = function(req,res){
  res.json(users)  
}

let  showUser = function(req,res){

    let index = users.findIndex(user => user.id == req.params.id)
    let user = users[index]
if(user){
    res.json(user)
}else{
    res.status(404).send("can't find user with such id" )
}
}
function createUser(req,res) {
  let counter = users.length;
    let postedUser = req.body;
    let newUser = {
        id:++counter,
        name: postedUser.name,
        username: postedUser.username,
        email: postedUser.email,
        address: {
            street: postedUser.address.street,
            suite: postedUser.address.suite,
            city: postedUser.address.city,
            zipcode: postedUser.address.zipcode,
            geo: {
                lat: postedUser.address.geo.lat,
                lng: postedUser.address.geo.lng
    }
},
phone: postedUser.phone,
website: postedUser.website,
company: {
    name: postedUser.company.name,
    catchPhrase: postedUser.company.catchPhrase,
    bs: postedUser.company.bs
    
   
} 
    }
users.push(newUser)
res.json(newUser)
    }

function updateUser(res,req){
    let updatedUser = req.body;
    let userindex = users.findIndex(user => user.id == req.params.id)
        if (updatedUser.name) { 
            users[i].name = putUser.name };
        if (updatedUser.username) { 
            users[userindex].username = updatedUser.username };
        if (updatedUser.email) { 
            users[userindex].email = updatedUser.email };
        if (updatedUser.address.street) {
             users[userindex].address.street = updatedUser.address.street };
        if (updatedUser.address.suite) { 
            users[userindex].address.suite = updatedUser.address.suite };
        if (updatedUser.address.city) {
             users[userindex].address.city = updatedUser.address.city };
        if (pupdatedUser.address.zipcode) { 
            users[userindex].address.zipcode = updatedUser.address.zipcode };
        if (updatedUser.address.geo.lat) { 
            users[userindex].address.geo.lat = updatedUser.address.geo.lat };
        if (updatedUser.address.geo.lng) { 
            users[userindex].address.geo.lng = updatedUser.address.geo.lng };
        if (updatedUser.phone) { 
            users[userindex].phone = updatedUser.phone };
        if (updatedUser.website) { 
            users[userindex].website = updatedUser.website };
        if (updatedUser.company.name) { 
            users[userindex].company.name = updatedUser.company.name };
        if (updatedUser.company.catchPhrase) { 
            users[userindex].company.catchPhrase = updatedUser.company.catchPhrase };
        if (updatedUser.company.bs) {
             users[userindex].company.bs = updatedUser.company.bs };
        res.json(users[userindex]);
    res.json(users)
}

function deleteUser(req,res){
    let index = users.findIndex(user => user.id == req.params.id)
    if (index >= 0) {
        users.slice(index)
        res.json(users);
    } else {
        res.status(400).send("con't find user.");
    }
};

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser

}