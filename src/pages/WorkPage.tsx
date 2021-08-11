import React from 'react';
import styles from '../assets/WorkPage.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Collapsible from 'react-collapsible';
// yarn tsm src (the folder that holds the stuff you want definitions of )
import '../assets/WorkPage.module.scss';
// maybe import app.css?

const WorkPage: React.FC = () => {

    const history = useHistory();

    const Trigger = () => <Button size="small">More</Button>;

    return (
        <div>
            <Button classes={{ 'root': styles.workButton,  'label': styles.workLabel}} onClick={() => history.push('/')}>Home</Button>
            <div className={styles.container}>
                <h1>Where have I worked?</h1>
                <div className={styles.navRows}>
                    <h2>X, The Moonshot Factory, SWE Intern on ML-infra and Data Science Teams</h2>
                        <Collapsible trigger={<Trigger/>}>
                        <h3>Tech Used:</h3>
                            <p>ProtoBufs, Tensorflow 2, ML Interpretability, Pandas, GeoPandas, Google Cloud Storage,
                                QGIS, Python, Google's BERT, UNet
                            </p>
                        </Collapsible>
                    <h2>Mlkmn Technologies, Founding SWE</h2>
                        <Collapsible trigger={<Trigger/>}>
                        <h3>Tech Used:</h3>
                                <h4>Firebase, AWS, Stripe, Typeform, React, Vue.js, Javascript/HTML/CSS
                                </h4>
                        </Collapsible>
                    <h2>Trumid Financial, LLC, Rotational Intern</h2>
                        <Collapsible trigger={<Trigger/>}>
                        <h3>Tech Used:</h3>
                                    <h4> Flask, Redis, D3, Javascript/HTML/CSS, Kafka, ProtoBufs, Docker, SocketIO
                                    </h4>
                        </Collapsible>
                    <h2>Moe's Delivery Driver, Catering Driver</h2>
                        <Collapsible trigger={<Trigger/>}>
                        <h3>Tech Used:</h3>
                                        <h4> The Moe's Van!
                                        </h4>
                        </Collapsible>
                    <h2>Freelance Videographer, Sole Employee</h2>
                        <Collapsible trigger={<Trigger/>}>
                        <h3>Tech Used:</h3>
                                    <h4> Final Cut Pro X, Adobe After Effects/Premiere Pro/Photoshop/Illustrator/Lightroom
                                    </h4>
                        </Collapsible>
                </div>
            </div>
        </div>
    );
}

export default WorkPage;