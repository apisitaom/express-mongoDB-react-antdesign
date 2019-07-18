import React, {Component} from 'react';
import { updateData } from './ListFunction';



class List extends Component{
  
// firstName
// lastName
// email
// age
// mobile

constructor(){
    super();
this.state = {
    firstName:'',
    lastName:'',
    email:'',
    age:'',
    mobile:'',
    _id:'',
    users:[]
};
this.handleChange = this.handleChange.bind(this);
this.addUser = this.addUser.bind(this);
}

handleChange(e){
    const {name, value} = e.target;
    this.setState({
        [name] : value
    });
}


addUser(e){
    e.preventDefault();
   if(this.state._id){
    fetch(`/user/put/${this.state._id}`,{
        method: 'PUT',
        body: JSON.stringify({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            age: this.state.age,
            mobile: this.state.mobile
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data =>{
        this.setState({_id:'', firstName:'', lastName:'', email:'',age:'', mobile:''});
        this.fetchUsers();
    });
   }else{
    fetch('/user/post',{
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        this.setState({firstName:'',lastName:'',email:'',age:'',mobile:''});
        this.fetchUsers();
    })
    .catch(err => console.error(err));
   }
}

componentDidMount(){
    this.fetchUsers();
}

fetchUsers(){
    fetch('/user')
    .then(res => res.json())
    .then(data => {
        this.setState({users: data});
        console.log(this.state.users)
    });
}

deletehUsers(){
  fetch(`/user/delete/${this.state._id}`)
  .then(res => res.json())
  .then(data => {
      this.setState({users: data});
      console.log(this.state.users)
  });
}

deleteUser(id){
    fetch(`/user/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data =>{
          console.log(data);
          this.deletehUsers();
      });
    }
    

    editUser = e =>{
      e.preventDefault();
      // updateData(this.state.firstName,this.state.lastName,this.state.email,this.state.age,this.state.mobile)
        updateData(this.state.firstName,this.state.lastName,this.state.email,this.state.age,this.state.mobile)
    }


// editUser(id){
//     fetch(`/user/${id}`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         this.setState({
//             firstName: data.firstName,
//             data : data.lastName,
//             data : data.email,
//             data : data.age,
//             data : data.mobile,
//             _id : data._id
            
//         });
//     });
// }

    render(){
        return(
            <div className="centerGroup">
             <nav className="light-blue darken-4">
                <div className="container">
                  <div className="nav-wrapper">
                    <a href="#" className="brand-logo">USER REGISTER</a>
                 </div>
               </div>
             </nav>
            

            <div className="test-input"></div>
             <form onSubmit={this.addUser}>
                 <label>FIRST NAME</label>
                <div className="input1">
                <input name="firstName" onChange={this.handleChange} value={this.state.firstName} type="text" placeholder="Enter First Name" autoFocus/>
                    </div>       
                    <label>LAST NAME</label>
                    <div className="input1">
                <input name="lastName" onChange={this.handleChange} value={this.state.lastName} type="text" placeholder="Enter Last Name" autoFocus/>
                    </div>  
                    <label>EMAIL</label>
                    <div className="input1">
                <input name="email" onChange={this.handleChange} value={this.state.email} type="text" placeholder="Enter Email" autoFocus/>
                    </div> 
                    <label>AGE</label>
                    <div className="input1">
                <input name="age" onChange={this.handleChange} value={this.state.age} type="text" placeholder="Enter Age" autoFocus/>
                    </div> 
                    <label>MOBILE</label>
                    <div className="input1">
                <input name="mobile" onChange={this.handleChange} value={this.state.mobile} type="text" placeholder="Enterm Mobile" autoFocus/>
                    </div>   
                    <button type="submit" className="send-botton">
                      SEND!
                    </button>

                  

                <div className="table">
                <table>
                <thead>
                  <tr>
                    <th>FIRST NAME</th>
                    <th>LAST NAME</th>
                    <th>EMAIL</th>
                    <th>AGE</th>
                    <th>MOBILE</th>
                  </tr>
                </thead>
                <tbody>
                  { 
                    this.state.users.map(user => {
                      return (
    
                        <tr key={user._id}>
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{user.email}</td>
                          <td>{user.age}</td>
                          <td>{user.mobile}</td>
                          <td>
                            <button onClick={() => this.deleteUser(user._id)} className="delete-botton">
                              <i className="material-delete">delete</i> 
                            </button>
                            <button onClick={() => this.editUser(user._id)} className="edit-boton" >
                              <i className="material-edit">edit</i>
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
                </div>
                 </form>
            </div>
        )
    }
}

export default List;