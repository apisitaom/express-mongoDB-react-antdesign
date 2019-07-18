import React, {Component} from "react";
// import {getData,updateItem,addList,deleteItem} from "./ListFunction";
// import { getList, addList } from "./TaskFunction";

import { Button } from 'antd';
class Home extends Component{

    render(){
        return(
            <div>
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
    <Button type="link">Link</Button>
 
            </div>
        )
    }

}
export default Home
