import React from 'react';
import Card from '../components/Card'
import styles from '../assets/WorkPage.module.scss';

import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import NavBar from './NavBar'

// yarn tsm src (the folder that holds the stuff you want definitions of )

const AboutPage: React.FC = () => {

    const history = useHistory();

    return (
        <div>
            <NavBar/>
            <div className={styles.container}>
                
                <h1>About Page</h1>
                <h2>Check out my LinkedIn, Github, WixSite, YouTube, Spotify, or my resume if you choose.</h2>
                <ul style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Card title={'Songs'} content={['Song 1', 'Song 2']} /> 
                    <Card title={'Quotes'} content={['Here', 'There']}/>
                    <Card title={'Problems Worth Solving'} content={['hello', 'yes']}/>
                    <Card title={'Books'} content={['hello', 'yes']}/>
                    <Card title={'Social'} content={['hello', 'yes']}/>
                </ul>
            </div>
        </div>
    );
}

export default AboutPage;