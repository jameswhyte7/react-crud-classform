import React, { Component } from 'react';


class ClassForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            name: "",
            email: "",
            password: "",
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }

        this.setState({
            persons: [...this.state.persons, newPerson],
            name: "",
            email: "",
            password: "",
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <br />
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Email</label>
                        <br />
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Password</label>
                        <br />
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div>
                        <br />
                        <button>Submit</button>
                    </div>
                </form>

                {this.state.persons.map((item, index) => {
                    return (<div key={index}>
                        <h4>Name: {item.name}</h4>
                        <p>Email: {item.email}</p>
                        <hr />
                    </div>)
                })}

            </div>
        );
    }
}

export default ClassForm;
