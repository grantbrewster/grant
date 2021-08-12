import React, { MouseEvent, useState, useEffect } from 'react';
import { Button, Container, Grid} from '@material-ui/core';
import styles from '../assets/LandingPage.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { EventEmitter } from 'events';
import Typography from '@material-ui/core/Typography';
// import * as styles from '../assets/LandingPage.module.scss'
import { ThemeProvider } from '@material-ui/core/styles';
import { sizing } from '@material-ui/system';

import Box from '@material-ui/core/Box';

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
            setHoverState("Projects...|");
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
        <Box height="100%" alignItems="stretch" style={{height:"100vh"}}>
        <Grid
            container
            direction="column"
            alignItems="stretch"
            justify="center"
            style={{height:"100vh"}}
            className={darkmode ? styles.darkContainer : styles.container}
        >   
            <Grid container spacing={3}>
                    <Grid item 
                            id="test"
                            className = {titleStyle}
                            onClick={() => history.push('/')} >
                            Grant Brewster
                    </Grid>
            </Grid>
            <Grid container
                direction="row"
                alignItems="center"
                justify="center"
                spacing={3}>
                <Grid item xs={3}>
                <Button classes={{ 'root': styles.workButton, 'label': darkmode ? styles.darkLabel : styles.workLabel }}
                    onClick={handleClick}
                    onMouseEnter={() => handleHoverCode(true)}
                    onMouseLeave={() => handleHoverCode(false)}>work</Button>
                </Grid>
                <Grid item xs={3}>
                <Button classes={{ 'root': styles.workButton, 'label': darkmode ? styles.darkLabel : styles.workLabel }}
                    onClick={handleClick}
                    onMouseEnter={() => handleHoverProjects(true)}
                    onMouseLeave={() => handleHoverProjects(false)}>projects</Button>
                </Grid>
                <Grid item xs={3}>
                <Button classes={{ 'root': styles.workButton, 'label': darkmode ? styles.darkLabel : styles.workLabel }}
                    onClick={handleClick}
                    onMouseEnter={() => handleHoverArt(true)}
                    onMouseLeave={() => handleHoverArt(false)}>art</Button>
                </Grid>
            </Grid>
        </Grid>
        </Box>
    );
}

export default LandingPage;