import React, {Component} from "react";
// import {getData,updateItem,addList,deleteItem} from "./ListFunction";
import { getList, addList } from "./TaskFunction";

class Task extends Component{

    constructor(){
        super();
        this.state = {
            id:"",
            term:"",
            editDisabled: false,
            items:[]
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    componentDidMount(){this.getAll();}

onChange = event =>{
    this.setState({term: event.target.value, editDisabled:'disable'});
    console.log(this.state.editDisabled);
}

onSubmit = e =>{
    e.preventDefault();
    addList(this.state.term).then(()=>{
        this.getAll();
    })
}

getAll = () =>{
    getList().then(data =>{
        this.setState(
            {
                term:"",
                items:[...data]
            },()=>{console.log(this.state.items);}
        )
    })
}

    // getAll = () =>{
    //     getList().then(data =>{
    //         this.setState(
    //             {
    //                 term:"",
    //                 items: [...data]
    //             },
    //             () =>{ console.log(this.state.items);}
    //         )
    //     })
    // }

// onSubmit = e =>{
//     e.preventDefault();
//     addList(this.state.term).then(()=>{
//         this.getAll();
//     })
// }
// onUpdate = e =>{
//     e.preventDefault();
//     updateItem(this.state.term, this.state.id).then(()=>{
//         this.getAll();
//     })
// }
// onEdit = (item, itemid, e)=>{
//     e.preventDefault();
//     this.setState({
//         id: itemid,
//         term: item
//     })
// }
// onDelete = (val, e)=>{
//     e.preventDefault();
//     deleteItem(val);

//     var data = [this.state.items];
//     data.filter(function(item, index){
//         if(item[1] == val){
//             data.splice(index, 1);
//         }
//         return true;
//     })
//     this.setState({items: [data]});

//     }

    render(){
        return(
            <div className="col">
                <form onSubmit={this.onSubmit}>
                    <div className="from-group">
                        <label htmlFor="exampleInputData">TASK NAME</label>
                        <div className="row">
                            <div className="col1">
                                <input 
                                type="text"
                                className="form-control"
                                id="inputData"
                                value={this.state.term || ""}
                                // onChange={this.onChange.bind(this)}
                                />
                            </div>
                            <div className="col2">
                                <botton
                                className="btn btn-primary"
                                // onClick={this.onUpdate.bind(this)}
                                >UPDATE</botton>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col3">
                    <botton
                    type="submit"
                    // onClick={this.onSubmit.bind(this)}
                    className="btn btn-primary"
                    >SAVE</botton>
                    </div>
                </form>
                   
                <div className="table">
                <table>
                <thead>
                  <tr>
                    <th>TASK</th>
                    <th>DELETE</th>
                    <th>UPDATE</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.items.map(items => {
                      return (
    
                        <tr key={items.id}>
                          <td>{items.term}</td>
                    
                          <td>
                            <button 
                            // onClick={() => this.deleteUser(user._id)} 
                            className="delete-botton">
                                DELETE
                              {/* <i className="material-delete">delete</i>  */}
                            </button>
                            <button 
                            // onClick={() => this.editUser(user._id)} 
                            className="edit-boton" >
                              {/* <i className="material-edit">edit</i> */}
                              EDIT
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
                </div>

            </div>
        )
    }

}

export default Task