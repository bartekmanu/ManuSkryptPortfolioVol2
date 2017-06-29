import React from 'react';
import ReactDOM from 'react-dom';
require('../sass/style.sass');

document.addEventListener('DOMContentLoaded', function() {

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

//ZBIORCZY OBSZAR NA IKONY
class BodyForIcons extends React.Component {
    render() {
        return (
            <div className = 'area_icons'>
                <AboutMeIcon />
                <InterestsIcon />
                <TechnologiesIcon />
                <MyWorkIcon />
                <ContactIcon />
            </div>
        );
    }
}

//PULPIT
class Desktop extends React.Component {
    render() {
        return (
            <div className = 'desktop'>
                <BodyForIcons />
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