const express = require('express')
const router = express.Router()

const User = require('../models/User')

//INSERT
router.post('/post' ,(req, res)=>{
const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
    mobile: req.body.mobile
}
User.create(userData)
console.log(req.body)
res.json({status: 'User POST!'})

})

// router.post('/', async(req, res)=>{
//     const {firstName,lastName,email,age,mobile} = req.body;
//     const user = new User({firstName,lastName,email,age,mobile});
//     await user.save();
//     res.json({status: 'User Save!'});
// })

//GET ALL
router.get('/', async(req, res)=>{
    const user = await User.find();
    res.json(user);
})
//GET BY ID 
router.get('/:id', async(req, res)=>{
    const user = await User.findById(req.params.id);
    res.json(user);
})
//UPDATE
router.put('/put/:id', async(req, res)=>{
    const {firstName,lastName,email,age,mobile} = req.body;
    const newUser = {firstName,lastName,email,age,mobile};
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({status: 'User Updateded!'});
});
//DELTE BY ID
router.delete('/delete/:id', async(req, res)=>{
    await User.findByIdAndRemove(req.params.id);
    res.json({status:'User Delete!'});
});

module.exports = router