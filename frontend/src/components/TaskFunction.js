import axios from "axios";

// export const getData = () =>{
//     return axios
//     .get("http://localhost:5000/task" , {
//         headers: {"Content-Type":"application/json"}
//     })
//     .then(res =>{
//         return res.data;
//     });
// };
export const getList = () =>{
    return axios
    .get("http://localhost:5000/task",{
        headers:{"Content-Type":"application/json"}
    })
    .then(res =>{
        return res.data;
    });
};

export const addList = term =>{
    return axios
    .post(
        "http://localhost:5000/task",
        {
            title : term,
            //title is only one file
            isDone: false
        },{
            headers: {"content-Type":"application/json"}
        }
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error);
        })
    )
}

export const deleteItem = term =>{
    axios
    .delete(`http://localhost:5000/task/${term}`,{
        headers: {"Content-Type":"application/json"}
    })
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
}

export const updateItem = (term, id) =>{
    return axios
    .put(
        `http://localhost:5000/task/${id}`,{
            title : term,
            isDone: false
        },
        {
            headers: {"Content-Type":"application/json"}
        }
    )
    .then(function(response){
        console.log(response);
    })
}