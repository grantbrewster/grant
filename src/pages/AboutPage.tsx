import React from 'react';
import Card from '../components/Card'
import styles from '../assets/WorkPage.module.scss';

import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

// yarn tsm src (the folder that holds the stuff you want definitions of )

const AboutPage: React.FC = () => {

    const history = useHistory();

    return (
        <div>
            <Button onClick={() => history.push('/')}>Home</Button>
            <div className={styles.container}>
                <h1>About Page</h1>
                <h2>Check out my LinkedIn, Github, WixSite(lol), YouTube, Spotify, or my resume if you choose.</h2>
                <Card title={'Songs'} />
                <Card title={'Quotes'} />
                <Card title={'Problems Worth Solving'} />
                <Card title={'Books'} />
                <Card title={'Social'} />
            </div>
        </div>
    );
}

export default AboutPage;