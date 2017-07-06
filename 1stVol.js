import React from 'react';
import ReactDOM from 'react-dom';
require('../sass/style.sass');

document.addEventListener('DOMContentLoaded', function() {

//TIMER
// class YourTime extends React.Component{
//     // constructor(props) {
//     //     super(props);

//     //     this.state = {
//     //         seconds: 0
//     //     };
//     // }
//     // componentDidMount(){
//     //     this.intervalId = setInterval(() => {
//     //         this.setState({
//     //             seconds: this.state.seconds + 1
//     //         });
//     //     }, 1000);
//     // }
//     // componentWillUnmount(){
//     //     clearInterval(this.intervalId);
//     // }
//     render(){
//         return (
//             <div className = 'your_time'>
//                 <p>WELCOME</p>
//                 {/*<p>Your time spent for me: {this.state.seconds} s.</p>*/}
//             </div>
//         )  
//     }
// }

// CONTAINERS

// class AboutMeBody extends React.Component {
    // render() {
        // return (
            // <div className="about_item">
                {/*<h1>About me</h1>*/}
                {/*<p>My name is <span>Bartek</span> and I am a <span>Junior Frontend Developer.</span> When I set my aims at something, I always carry out my plans. It wasn't any different this time either.*/}
                {/*</p>*/}
                {/*<p>I came to the realisation that I needed more opportunities for development and self-improvement. Leaving my comfort zone was not easy, but, as they say, the faint heart never won fair lady.*/}
                {/*</p>*/}
                {/*<p>This is how I ended up at a <span>CodersLab</span> course. Why Frontend? The greatest thing about it is that I can continue to develop myself, this About Me page being an example of that.*/}
                {/*</p>*/}
                {/*<div id="about_photo"></div>*/}
            {/*</div>*/}
        // );
    // }
// }

class LikeWindow extends React.Component {
    render() {
        return (
            <div className="about_me_section">
                <div className="window_top" >
                    <p>Tytul</p>
                    <p>X</p>
                </div>
                <div className="window_body" >
                    <AboutMeBody />
                </div>
            </div>
        );
    }
}


// CONTAINER FOR SECTIONS

// class BodyForSections extends React.Component {
//     render() {
//         return (
//             <div className="body_for_sections" >
//                 <LikeWindow />
//             </div>
//         );
//     }
// }

//ICONS
// class AboutMeIcon extends React.Component {
//     render() {
//         return (
//             <div className = 'rim'>         
//                 <div className = 'about_me_icon'></div>
//                 <p>About me</p>                
//             </div>
//         );
//     }
// }
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
                <div> <p>{ this.state.hour }</p> </div>
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

//DESKTOP
// class Desktop extends React.Component {
//     render() {
//         return (
//             <div className = 'desktop'>
//                 <YourTime />,           
//                 <BodyForIcons />,
//                 <BodyForSections />,
//                 <Footer />        
//             </div>
//         );
//     }
// }

//APP WIADOMKA
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Desktop />
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//         <App />,
//         document.querySelector('#app')
//     );

// });