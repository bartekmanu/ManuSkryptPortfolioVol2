import React from 'react';
import Form from '../Footer/form.jsx'

class LocalTime extends React.Component {
    constructor(props){
        super(props)

        this.state = {
        hour: new Date().toLocaleTimeString()
        }
    }
    render() {
        let int = setInterval(()=> {
        	this.setState({ hour: new Date().toLocaleTimeString() })
        },1000)
        return (
            <div className="clock">
             <p>{ this.state.hour }</p>                 
            </div>
        );
    }
}

const Flag = ({onClick}) => (
    <div className="flag" onClick={onClick}></div>
)

const DownloadCv =() => (
    <div className="myCv">
        <div id="download"></div>
        <p><a href="https://www.dropbox.com/s/cf2iypf2yxfbhul/CV-%20Bartosz%20Manowski%20eng.pdf?dl=0" download>Click here to Download my CV</a></p>
        {/*<Form />*/}
    </div> 
)

export default class Footer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showCv: false
        }

    this.handleShowCv = this.handleClick.bind(this)
        
}

handleClick() {
    this.setState(prevState => ({ 
        showCv: !prevState.showCv
    }));
}


    render() {
        
        return (
            <div className = 'footer' >
                <Flag onClick={this.handleShowCv} />
                {this.state.showCv && <DownloadCv />}
                {/*<div className="clock"> <p>Zegarek</p> </div>*/}
                <LocalTime />
            </div>
        );        
    }
}