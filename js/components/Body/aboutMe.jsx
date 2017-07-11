import React from 'react';

const AboutMeIcon =({onClick}) => (
    <div className="rim">
        <div className="aboutMeIcon" onClick={onClick}></div>
        <p>About me</p>
    </div>
)

const OffBtn = ({onClick}) => (
    <div className="buttonOff" onClick={onClick}>
        <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
    </div>
)

const AboutMeWindow =({onClick}) => (
    <div className="windowSize aboutSize">
        <div className="topLabel">
            <OffBtn onClick={onClick} />
        </div>
        <div id="aboutMenu"></div> 
        <div className="aboutItem">
            <h1>About me</h1>
            <div>
                <p>My name is Bartek and I am a Junior Frontend Developer. When I set my aims at something, I always carry out my plans. It wasn't any different this time either.</p>
                <p>I came to the realisation that I needed more opportunities for development and self-improvement. Leaving my comfort zone was not easy, but, as they say, the faint heart never won fair lady.</p>
                <p>This is how I ended up at a CodersLab course. Why Frontend? The greatest thing about it is that I can continue to develop myself, this About Me page being an example of that.</p>
            </div>
            <div id="aboutPhoto"></div>
        </div>
    </div>
)

export default class AboutMeComplex extends React.Component {
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
                <AboutMeIcon onClick={this.boundShowWindow} />
                {this.state.showWindow && <AboutMeWindow onClick={this.boundHideWindow}/>}
            </div>
        );
    }
}
