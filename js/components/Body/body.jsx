import React from 'react';

import YourTime from "../Header/header.jsx";
import AboutMeComplex from "../Body/aboutMe.jsx";
import HobbyComplex from "../Body/myHobby.jsx";
import TechnologyComplex from "../Body/technology.jsx";
import MyWorkComplex from "../Body/myWork.jsx";
import ContactComplex from "../Body/contact.jsx";
import TrashComplex from "../Body/trash.jsx";
import LocalTime from "../Footer/footer.jsx";

class ContainerIcon extends React.Component {
    render() {
        return (
            <div className="containerIcon">
                <AboutMeComplex />
                <HobbyComplex />
                <TechnologyComplex />
                <MyWorkComplex />
                <ContactComplex />
                <TrashComplex />
            </div>
        );
    }
}


export default class Desktop extends React.Component {
    render() {
        return (
            <div className = 'desktop'>
                <YourTime />                
                <ContainerIcon />
                <LocalTime />                
            </div>
        );
    }
}