import React from 'react';
import ReactDOM from 'react-dom';
require('../sass/style.sass');

document.addEventListener('DOMContentLoaded', function() {

//TIMER
class YourTime extends React.Component{
    // constructor(props) {
        // super(props);
// 
        // this.state = {
            // seconds: 0
        // };
    // }
    // componentDidMount(){
        // this.intervalId = setInterval(() => {
            // this.setState({
                // seconds: this.state.seconds + 1
            // });
        // }, 1000);
    // }
    // componentWillUnmount(){
        // clearInterval(this.intervalId);
    // }
    render(){
        return (
            <div className = 'your_time'>
                WELCOME
                {/*<h1>Your time spent for me: {this.state.seconds} s.</h1>*/}
            </div>
        )  
    }
}

//ICONS
class AboutMeIcon extends React.Component {
    render() {
        return (
            <div className = 'rim'>         
                <div className = 'about_me_icon'></div>
                <p>About me</p>                
            </div>
        );
    }
}
class InterestsIcon extends React.Component {
    render() {
        return (
            <div className = 'rim'>
                <div className = 'interests_icon'></div>
                <p>Interests</p>                
            </div>
        );
    }
}
class TechnologiesIcon extends React.Component {
    render() {
        return (
            <div className = 'rim'>           
                <div className = 'technologies_icon'></div>
                <p>Technology</p>                
            </div>   
        );
    }
}
class MyWorkIcon extends React.Component {
    render() {
        return (
            <div className = 'rim'>          
                <div className = 'my_wrok_icon'></div>
                <p>My work</p>
            </div>   
        );
    }
}
class ContactIcon extends React.Component {
    render() {
        return (
            <div className = 'rim'>     
                <div className = 'contact_icon'></div>
                <p>Contact</p>                
            </div>   
        );
    }
}
class Trash extends React.Component {
    render() {
        return (
            <div className = 'rim'>     
                <div className = 'trash_icon'></div>
                <p>Trash</p>                
            </div>   
        );
    }
}

//AREA FOR ICONS
class BodyForIcons extends React.Component {
    render() {
        return (
            <div className = 'area_icons'>
                <AboutMeIcon />
                <InterestsIcon />
                <TechnologiesIcon />
                <MyWorkIcon />
                <ContactIcon />
                <Trash />
            </div>
        );
    }
}

//AREA FOR WINDOWS

//LOCAL TIME
// class LocalTime extends React.Component {
//     render() {
//         let int = setInterval(()=> {
//         let hour = new Date().toLocaleTimeString()
//         },1000)
//         return (
//             <div className = 'local_time' >
//                 <div> <span>Jest godzina:</span> <h1>{ this.hour }</h1> </div>
//             </div>
//         );        
//     }
// }
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
            <div className = 'local_time' >
                <div> <h1>{ this.state.hour }</h1> </div>
            </div>
        );        
    }
}


//FOOTER

class Footer extends React.Component {
    render() {
        return (
            <div className = 'footer' >
                <LocalTime />     
            </div>
        );
    }
}

//PULPIT
class Desktop extends React.Component {
    render() {
        return (
            <div className = 'desktop'>
                <YourTime />,           
                <BodyForIcons />,
                <Footer />        
            </div>
        );
    }
}

//APP WIADOMKA
class App extends React.Component {
    render() {
        return (
            <div>
                <Desktop />
            </div>
        );
    }
}

ReactDOM.render(
        <App />,
        document.querySelector('#app')
    );

});