import React from 'react';

const ContactIcon =({onDoubleClick}) => (
    <div className="rim">
        <div className="contactIcon" onDoubleClick={onDoubleClick}></div>
        <p>Contact</p>
    </div>
)

const OffBtn = ({onClick}) => (
    <div className="buttonOff" onClick={onClick}>
        <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
    </div>
)

const ContactWindow =({onClick}) => (
    <div className="windowSize contactSize">
        <div className="topLabel">
            <OffBtn onClick={onClick} />
        </div>
        <div id="contactMenu"></div>
        <div className="contactItem">
            <h1>Contact</h1>
            <div>
                <a target="_blank" href="https://github.com/bartekmanu">
                    <i className="fa fa-github fa-4x"></i>
                    <p>github.com/bartekmanu</p>
                </a>

                <a target="_blank" href="https://linkedin.com/in/bartosz-manu-manowski">
                    <i className="fa fa-linkedin-square fa-4x"></i>
                    <p>LinkedIn profile</p>
                </a>

                <a target="_blank" href="https://www.facebook.com/czaszkobij">
                    <i className="fa fa-facebook-official fa-4x"></i>
                    <p>facebook.com/czaszkobij</p>
                </a>

                <a>
                    <i className="fa fa-envelope fa-4x"></i>
                    <p>manowski.b@gmail.com</p>
                </a>

                <a>
                    <i className="fa fa-mobile fa-4x"></i>
                    <p>791 611 443</p>
                </a>
            </div>
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
