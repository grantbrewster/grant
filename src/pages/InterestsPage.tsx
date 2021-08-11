import React from 'react';
import styles from '../assets/WorkPage.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
// yarn tsm src (the folder that holds the stuff you want definitions of )

const InterestsPage: React.FC = () => {

    const history = useHistory();

    return (
        <div>
            <Button onClick={() => history.push('/')}>Home</Button>
            <div className={styles.container}>
                <h1>Interests</h1>
                <div className={styles.navRows}>
                    <h2>Surfing</h2>
                        <h3>Things Learned:</h3>
                            <h4>The degradation of our environment, including our oceans, is the most important problem facing our existence. 
                            </h4>
                    <h2>Snowboarding</h2>
                        <h3>Tech Used:</h3>
                                <h4>Firebase, AWS, Stripe, Typeform, React, Vue.js, Javascript/HTML/CSS
                                </h4>
                    <h2>Venture Capital</h2>
                        <h3>Learnings:</h3>
                                    <h4> Flask, Redis, D3, Javascript/HTML/CSS, Kafka, ProtoBufs, Docker, SocketIO
                                    </h4>
                    <h2>Moe's Delivery Driver, Catering Driver</h2>
                        <h3>Tech Used:</h3>
                                        <h4> The Moe's Van!
                                        </h4>
                    <h2>Freelance Videographer, Sole Employee</h2>
                        <h3>Tech Used:</h3>
                                    <h4> Final Cut Pro X, Adobe After Effects/Premiere Pro/Photoshop/Illustrator/Lightroom
                                    </h4>
                </div>
            </div>
        </div>
    );
}

export default InterestsPage;