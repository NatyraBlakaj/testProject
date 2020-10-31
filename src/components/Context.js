import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state={
        users:[
            {
                emri:"Natyra",
                mbiemri:"Blakaj",
                mosha:22
            },
            {
                emri:"Shkelqim",
                mbiemri:"Maxharraj",
                mosha:22
            },
            {
                emri:"Atdhe",
                mbiemri:"Blakaj",
                mosha:21
            }
        ]
    }
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;