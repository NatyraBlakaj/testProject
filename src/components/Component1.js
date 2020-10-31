import React, {Component} from 'react';
import {Consumer} from "./Context";
import './Component1.css'

class Component1 extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div>
                            {value.users.map(item => (
                                <div className="user">
                                    <h3>{item.emri}</h3>
                                    <h3>{item.mbiemri}</h3>
                                    <p>{item.mosha}</p>
                                </div>


                            ))}
                        </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default Component1;