import axios from "axios"

// firstName:'',
// lastName:'',
// email:'',
// age:'',
// mobile:'',
// _id:'',
// users:[]
export const updateData = (firstName,lastName,email,age,mobile,id)=>{
return axios
.put(
    `http://localhost:5000/user/put/${id}`,{
        firstName: firstName,
        lastName:lastName,
        email:email,
        age:age,
        mobile:mobile
    },
    {
        headers:{"Content-Type":"application/json"}
    }
)


}