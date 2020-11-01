import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'Delete':
            return {
                ...state,
                users: state.users.filter(user =>
                    user.id !== action.payload)
            };
        case 'addUser':
            return {
                ...state,
                users: [action.payload,
                    ...state.users]
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        users: [
            {
                id: 1,
                name: "Natyra",
                email: "natyrab@gmail.com",
                phone: "222-222-3333"
            },
            {
                id: 2,
                name: "Shkelqim",
                email: "shkel@gmail.com",
                phone: "444-555-44444"
            },
            {
                id: 3,
                name: "Atdhe",
                email: "ati12@gmail.com",
                phone: "888-888-7777"
            }
        ],
        dispatch: action =>
            this.setState(state => reducer(state, action))


    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;