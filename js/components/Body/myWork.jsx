import React from 'react';

const MyWorkIcon =({onDoubleClick}) => (
    <div className="rim">
        <div className="myWorkIcon" onDoubleClick={onDoubleClick}></div>
        <p>My work</p>
    </div>
)

const OffBtn = ({onClick}) => (
    <button className="buttonOff" onClick={onClick}>X</button>
)

const MyWorkWindow =({onClick}) => (
    <div className="windowSize workSize">
        <div className="topLabel">
            <OffBtn onClick={onClick} />
        </div>
        <div id="workMenu"></div>
        <div className="myWorkItem">
            <h1>My work</h1>
            
            <div id="aboutPhoto"></div>
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
        this.setState({showWindow: false})
    }

    render() {
        return (
            <div>
                <MyWorkIcon onDoubleClick={this.boundShowWindow} />
                {this.state.showWindow && <MyWorkWindow onClick={this.boundHideWindow}/>}
            </div>
        );
    }
}
