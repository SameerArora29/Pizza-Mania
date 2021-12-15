
const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')

function initRoutes(app) {

    app.get('/' , homeController().index)
    app.get('/login' , authController().login)
    app.get('/register' , authController().register)
    
    
    app.get('/cart' , cartController().index) 
    app.post('/update-cart' , cartController().update)

}

   // function(req,res){
    //     res.render('home')
    // } now this same thing is done in homecontroller through a function using module system
    

module.exports = initRoutes