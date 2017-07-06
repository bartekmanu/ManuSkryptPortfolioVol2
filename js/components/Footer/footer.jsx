import React from 'react';

export default class LocalTime extends React.Component {
	// 	constructor(props){
    //     super(props)

    //     this.state = {
    //     hour: new Date().toLocaleTimeString()
    //     }
    // }
    render() {
        // let int = setInterval(()=> {
        // 	this.setState({ hour: new Date().toLocaleTimeString() })
        // },1000)
        return (
            <div className = 'localTime' >
                {/*<div> <p>{ this.state.hour }</p> </div>*/}
                <div className="flag"></div>
                <div className="clock"> <p>Zegarek</p> </div>
            </div>
        );        
    }
}