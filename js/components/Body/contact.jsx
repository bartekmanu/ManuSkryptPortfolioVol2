import React from 'react';

const ContactIcon =({onDoubleClick}) => (
    <div className="rim">
        <div className="contactIcon" onDoubleClick={onDoubleClick}></div>
        <p>Contact</p>
    </div>
)

const OffBtn = ({onClick}) => (
    <button className="buttonOff" onClick={onClick}>X</button>
)

const ContactWindow =({onClick}) => (
    <div className="windowSize contactSize">
        <div className="topLabel">
            <OffBtn onClick={onClick} />
        </div>
        <div className="contactItem">
            <h1>Contact</h1>
            <div id="aboutPhoto"></div>
        </div>
    </div>
)

export default class ContactComplex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showWindow: false
        }
        this.boundShowWindow = this.showWindow.bind(this);
        this.boundHideWindow = this.hideWindow.bind(this);
    }

    showWindow() {
        this.setState({ showWindow: true })
    }
    hideWindow() {
        this.setState({showWindow: false})
    }

    render() {
        return (
            <div>
                <ContactIcon onDoubleClick={this.boundShowWindow} />
                {this.state.showWindow && <ContactWindow onClick={this.boundHideWindow}/>}
            </div>
        );
    }
}
