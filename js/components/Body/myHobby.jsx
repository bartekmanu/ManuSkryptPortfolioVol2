import React from 'react';

const MyHobbyIcon =({onDoubleClick}) => (
    <div className="rim">
        <div className="myHobbyIcon" onDoubleClick={onDoubleClick}></div>
        <p>My hobby</p>
    </div>
)

const OffBtn = ({onClick}) => (
    <div className="buttonOff" onClick={onClick}>
        <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
    </div>
)

const HobbyWindow =({onClick}) => (
    <div className="windowSize hobbySize">
        <div className="topLabel">
            <OffBtn onClick={onClick} />
        </div>
        <div id="hobbyMenu"></div>
        <div className="hobbyItem">
            <h1>Hobby</h1>
            <div>
                <p>How do I spend my free time? I love extreme sports, I ride a longboard. Despite the physical effort that I have to make to stay on the board at 70 km/h, it is the best thing that relaxes me.</p>
                <p>My other big hobby is beekeeping, my apiary called "Miodożer" (Honey Gobbler). Turning honey and working with bees gives me a lot of satisfaction.</p>
                <p>There are also some animals always waiting for me at home. My quadrupeds: two dogs, a cat, a pair of lizards ... need I continue?</p>
            </div>
            <div id="aboutPhoto"></div>
        </div>
    </div>
)

export default class HobbyComplex extends React.Component {
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
                <MyHobbyIcon onDoubleClick={this.boundShowWindow} />
                {this.state.showWindow && <HobbyWindow onClick={this.boundHideWindow}/>}
            </div>
        );
    }
}
