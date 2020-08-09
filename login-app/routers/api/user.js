const router = require('express').Router()
const bcrpt = require('bcryptjs')
let User = require('../../models/user.model')

// get all user 
router.get('/' , (req,res) => {
    User.find()
    .then(users => {
        users && res.json(users)
    })
})

// create new user 
router.post('/register' , (req,res) => {
    let {userName , email , password} = req.body

    User.findOne({email})
    .then(user => {
        if(user) {
            res.json({error: 'This email address is already taken.'})
        }else{
            let new_user = new User({userName , email , password})
            bcrpt.genSalt(10 , (err , salt) => {
                bcrpt.hash(new_user.password , salt , (err , hash) => {
                    if(err) throw err 
                    new_user.password = hash 
                    new_user.save()
                    .then(user => res.json({msg: "Register successfull"}))
                })
            })
        }
    })
})

module.exports = router 