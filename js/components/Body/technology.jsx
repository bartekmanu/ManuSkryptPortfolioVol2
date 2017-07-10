import React from 'react';

const TechnologyIcon =({onDoubleClick}) => (
    <div className="rim">
        <div className="technologyIcon" onDoubleClick={onDoubleClick}></div>
        <p>Technology</p>
    </div>
)

const OffBtn = ({onClick}) => (
    <div className="buttonOff" onClick={onClick}>
        <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
    </div>
)

const TechnologyWindow =({onClick}) => (
    <div className="windowSize technologySize">
        <div className="topLabel">
            <OffBtn onClick={onClick} />
        </div>
        <div id="technologyMenu"></div>
        <div className="technologyItem">
            <h1>Technology</h1>
            <div className="techItems">
                <div id="tech1"></div>
                <div id="tech2"></div>
                <div id="tech3"></div>
                <div id="tech4"></div>
                <div id="tech5"></div>
                <div id="tech6"></div>
                <div id="tech7"></div>
                <div id="tech8"></div>
                <div id="tech9"></div>
            </div>
        </div>
    </div>
)

export default class TechnologyComplex extends React.Component {
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
                <TechnologyIcon onDoubleClick={this.boundShowWindow} />
                {this.state.showWindow && <TechnologyWindow onClick={this.boundHideWindow}/>}
            </div>
        );
    }
}
