import React from 'react';
import styles from '../assets/WorkPage.module.scss';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import PhotoIcon from '@material-ui/icons/Photo';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import FaceIcon from '@material-ui/icons/Face';
// yarn tsm src (the folder that holds the stuff you want definitions of )
import '../assets/WorkPage.module.scss';

const NavBar: React.FC = () => {
    const history = useHistory();

    return (
        <div>
            <Button
                startIcon={< HomeIcon />}
                size='large'
                classes={{ 'label': styles.workLabel }}
                onClick={() => history.push('/')}>
                Home
            </Button>
            |
            <Button
                startIcon={< WorkIcon />}
                size='large'
                classes={{ 'label': styles.workLabel }}
                onClick={() => history.push('/work')}>
                Work
            </Button>
            |
            <Button
                startIcon={< CodeIcon />}
                size='large'
                classes={{ 'label': styles.workLabel }}
                onClick={() => history.push('/projects')}>
                Projects
            </Button>
            |
            <Button
                startIcon={< PhotoIcon />}
                size='large'
                classes={{ 'label': styles.workLabel }}
                onClick={() => history.push('/art')}>
                Art
            </Button>
            |
            <Button
                startIcon={< FaceIcon />}
                size='large'
                classes={{ 'label': styles.workLabel }}
                onClick={() => history.push('/about')}>
                About Me
            </Button>
        </div>
    );
}

export default NavBar;