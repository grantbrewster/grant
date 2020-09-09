import React from 'react';
import styles from '../assets/WorkPage.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
// yarn tsm src (the folder that holds the stuff you want definitions of )

const WorkPage: React.FC = () => {

    const history = useHistory();

    return (
        <div>
            <Button onClick={() => history.push('/')}>Home</Button>
            <div className={styles.container}>
                <h1>Where have I worked?</h1>
                <div className={styles.navRows}>
                    <h2>X, The Moonshot Factory, SWE Intern on ML-infra and Data Science Teams</h2>
                        <h3>Tech Used:</h3>
                            <h4>ProtoBufs, Tensorflow 2, ML Interpretability, Pandas, GeoPandas, Google Cloud Storage,
                                QGIS, Python, Google's BERT, UNet
                            </h4>
                    <h2>Mlkmn Technologies, Founding SWE</h2>
                        <h3>Tech Used:</h3>
                                <h4>Firebase, AWS, Stripe, Typeform, React, Vue.js, Javascript/HTML/CSS
                                </h4>
                    <h2>Trumid Financial, LLC, Rotational Intern</h2>
                        <h3>Tech Used:</h3>
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

export default WorkPage;