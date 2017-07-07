import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {password: ''};
    }

handlePassowrd = (event) => {
    let reg = /(bazinga){1}\d/g
    const pass = event.target.value
        .replace(reg, '')
    this.setState({password: pass})
}

    render() {
        return (
            <form className="form">
                <label>
                    Write 'bazinga' to download my CV
                    <input type="text"
                        value={this.state.password}
                        onChange={this.handlePassowrd}
                    />
                </label>
            </form>
        );
    }
}
