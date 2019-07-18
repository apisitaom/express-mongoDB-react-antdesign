import axios from "axios"

export const userRegister = newUser =>{
    return axios 
    .post('user/post',{
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        age: newUser.age,
        mobile: newUser.mobile
        // firstName:'',
        // lastName:'',
        // email:'',
        // age:'',
        // mobile:'',
    }).then(ersponse =>{
        console.log('SAVE SUCCESS!')
    })
}