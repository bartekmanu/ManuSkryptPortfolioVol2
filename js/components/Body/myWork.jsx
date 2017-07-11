import React from 'react';

const MyWorkIcon = ({ onClick }) => (
    <div className="rim">
        <div className="myWorkIcon" onClick={onClick}></div>
        <p>My work</p>
    </div>
)

const OffBtn = ({ onClick }) => (
    <div className="buttonOff" onClick={onClick}>
        <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
    </div>
)

const MyWorkWindow = ({ onClick }) => (
    <div className="windowSize workSize">
        <div className="topLabel">
            <OffBtn onClick={onClick} />
        </div>
        <div id="workMenu"></div>
        <div className="myWorkItem">
            <h1>My work</h1>
            <div>
                <a target="_blank" href="https://bartekmanu.github.io/Moonspeak/moonspeak">
                    <div id="work1"></div>
                    <p>Moonspeak</p>
                </a>
                <a target="_blank">
                    <i className="fa fa-cog fa-spin fa-3x "></i>
                    <p>More coming soon</p>
                </a>
            </div>
        </div>
    </div>
)

export default class MyWorkComplex extends React.Component {
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
        this.setState({ showWindow: false })
    }

    render() {
        return (
            <div>
                <MyWorkIcon onClick={this.boundShowWindow} />
                {this.state.showWindow && <MyWorkWindow onClick={this.boundHideWindow} />}
            </div>
        );
    }
}
