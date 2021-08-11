import React from 'react';
import styles from '../assets/WorkPage.module.scss';

import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
// yarn tsm src (the folder that holds the stuff you want definitions of )

const ProjectsPage: React.FC = () => {

    const history = useHistory();

    return (
        <div>
            <Button onClick={() => history.push('/')}>Home</Button>
            <div className={styles.container}>
                <h1>What Have I Done?</h1>
                <div className={styles.navRows}>
                    <h2>This website</h2>
                    <h2>Mini-Minecraft</h2>
                    <h2>Tour De Jersey</h2>
                    <h2>MAD4kids/BnB</h2>
                </div>
            </div>
        </div>

    );
}

export default ProjectsPage;