import React from 'react';

export default class YourTime extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0
        };
    }
    componentDidMount(){
        this.intervalId = setInterval(() => {
            this.setState({
                seconds: this.state.seconds + 1
            });
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }
    render(){
        return (
            <div className = 'yourTime'>
                <p>WELCOME</p>
                <p>Your time spent for me: {this.state.seconds} s.</p>
            </div>
        )  
    }
}