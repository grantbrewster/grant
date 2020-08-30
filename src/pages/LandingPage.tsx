import React, {MouseEvent} from 'react';
import { Button } from '@material-ui/core';
import styles from '../assets/LandingPage.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { EventEmitter } from 'events';
// import Hello from '../assets/money.png';


// yarn tsm src (the folder that holds the stuff you want definitions of )

const LandingPage: React.FC<{title: string}> = ({title}) => {

    const history = useHistory();

    const handleClick = (event: MouseEvent) => {

        const n = event.target as HTMLInputElement;
        
        history.push(`/${n.innerHTML}`);

    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title} onClick= {()=>history.push('/about')}>Grant Brewster</h1>
            <div className={styles.navRows}>
                <Button classes={{ 'root': styles.workButton, 'label': styles.workLabel }} onClick={handleClick}>work</Button>
                <Button classes={{ 'root': styles.workButton, 'label': styles.workLabel }} onClick={handleClick}>projects</Button>
                <Button classes={{ 'root': styles.workButton, 'label': styles.workLabel }} onClick={handleClick}>art</Button>
            </div>

        </div>

    );
}

export default LandingPage;