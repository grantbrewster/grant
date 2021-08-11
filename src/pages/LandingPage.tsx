import React, { MouseEvent, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import styles from '../assets/LandingPage.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { EventEmitter } from 'events';

// import Hello from '../assets/money.png';

// yarn tsm src (the folder that holds the stuff you want definitions of )

const LandingPage: React.FC<{ title: string }> = ({ title }) => {

    const [hoverState, setHoverState] = useState('Grant Brewster');
    const [titleStyle, setTitleStyle] = useState(styles.title)
    const [darkmode, setDarkMode] = useState(false);

    const history = useHistory();

    useEffect(() => {

        // want this to actually render a different image for "Grant Brewster" on hover
        document.getElementById('test')!.innerHTML = hoverState;
        // return null;
    });

    const handleClick = (event: MouseEvent) => {

        const n = event.target as HTMLInputElement;

        history.push(`/${n.innerHTML}`);

    };

    const handleHoverCode = (i: boolean) => {
        if (i) {
            setHoverState("Work");
            setTitleStyle(styles.workFont);
        } else {
            setHoverState("Grant Brewster");
            setTitleStyle(styles.title);
        };
    };

    const handleHoverProjects = (i: boolean) => {
        if (i) {
            setHoverState("Projects");
            setTitleStyle(styles.codeFont);
            setDarkMode(true);
        } else {
            setHoverState("Grant Brewster");
            setTitleStyle(styles.title);
            setDarkMode(false);
        };
    };

    const handleHoverArt = (i: boolean) => {
        if (i) {
            setHoverState("Art");
            setTitleStyle(styles.artFont);
        } else {
            setHoverState("Grant Brewster");
            setTitleStyle(styles.title);
        };
    };

    return (
        <div className={darkmode ? styles.darkContainer : styles.container}>
            <h1 id='test' className={titleStyle} onClick={() => history.push('/')} >Grant Brewster</h1>
            <div className={styles.navRows}>
                <Button classes={{ 'root': styles.workButton, 'label': darkmode ? styles.darkLabel : styles.workLabel }}
                    onClick={handleClick}
                    onMouseEnter={() => handleHoverCode(true)}
                    onMouseLeave={() => handleHoverCode(false)}>work</Button>
                <Button classes={{ 'root': styles.workButton, 'label': darkmode ? styles.darkLabel : styles.workLabel }}
                    onClick={handleClick}
                    onMouseEnter={() => handleHoverProjects(true)}
                    onMouseLeave={() => handleHoverProjects(false)}>projects</Button>
                <Button classes={{ 'root': styles.workButton, 'label': darkmode ? styles.darkLabel : styles.workLabel }}
                    onClick={handleClick}
                    onMouseEnter={() => handleHoverArt(true)}
                    onMouseLeave={() => handleHoverArt(false)}>art</Button>
            </div>
        </div>

    );
}

export default LandingPage;