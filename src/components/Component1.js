import React, {Component} from 'react';
import {Consumer} from "./Context";
import './Component1.css';
import {Link} from "react-router-dom";

class Component1 extends Component {
delete = (id,dispatch) =>{
    dispatch({type:'Delete',payload:id});

}

    render() {
        return (
            <Consumer>
                {value => {
                    const {dispatch}=value;
                    return (
                        <div>

                            {value.users.map(item => (
                                <div className="user">
                                    <h3>{item.name}</h3>
                                    <h3>{item.email}</h3>
                                    <p>{item.phone}</p>
                                    <button className="btn btn-danger" onClick={() => {
                                        this.delete(item.id, dispatch)
                                    }}>X</button>
                                </div>


                            ))}
                            <Link className="btn btn-primary mr-5 mt-5"  to={'/Adduser'}>Add user
                            </Link>
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default Component1;