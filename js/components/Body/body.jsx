import React from 'react';

import YourTime from "../Header/header.jsx";
import AboutMeComplex from "../Body/aboutMe.jsx";

export default class Desktop extends React.Component {
    render() {
        return (
            <div className = 'desktop'>
                <YourTime />
                <AboutMeComplex />
            </div>
        );
    }
}