import React from 'react';

const TrashIcon =({onDoubleClick}) => (
    <div className="rim">
            <div className="trashIcon" onDoubleClick={onDoubleClick}></div>
            <p>Trash</p>
    </div>
)

const OffBtn = ({onClick}) => (
    <div className="buttonOff" onClick={onClick}>
        <i className="fa fa-times-circle fa-2x" aria-hidden="true"></i>
    </div>
)

const TrashWindow =({onClick}) => (
    <div className="windowSize trashSize">
        <div className="topLabel">
            <OffBtn onClick={onClick} />
        </div>
        <div id="trashMenu"></div>
        <div className="trashItem">
            <h1>Trash</h1>
            <div>
                <a target="_blank" href="https://bartekmanu.github.io/Portfolio/">
                    <div id="crap"></div>
                    <p>1st portfolio</p>
                </a>
            </div>
        </div>
    </div>
)

export default class TrashComplex extends React.Component {
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
                <TrashIcon onDoubleClick={this.boundShowWindow} />
                {this.state.showWindow && <TrashWindow onClick={this.boundHideWindow}/>}
            </div>
        );
    }
}
