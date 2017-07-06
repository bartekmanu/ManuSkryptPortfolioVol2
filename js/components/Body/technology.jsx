import React from 'react';

const TechnologyIcon =({onDoubleClick}) => (
    <div className="rim">
        <div className="technologyIcon" onDoubleClick={onDoubleClick}></div>
        <p>Technology</p>
    </div>
)

const OffBtn = ({onClick}) => (
    <button className="buttonOff" onClick={onClick}>X</button>
)

const TechnologyWindow =({onClick}) => (
    <div className="windowSize technologySize">
        <div className="topLabel">
            <OffBtn onClick={onClick} />
        </div>
        <div className="technologyItem">
            <h1>Technology</h1>
            <ul> 
                <li id="image1"></li>
                <li id="image2"></li>
                <li id="image3"></li>
                <li id="image4"></li>
                <li id="image5"></li>
                <li id="image6"></li>
                <li id="image7"></li>
                <li id="image8"></li>
                <li id="image9"></li>
            </ul>
            <div id="aboutPhoto"></div>
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
