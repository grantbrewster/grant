import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

// yarn tsm src (the folder that holds the stuff you want definitions of )

const ArtPage: React.FC = () => {

    const history = useHistory();

    return (
        // just do a carousel or something here
        <div >
            <Button onClick={() => history.push('/')}>Home</Button>
            <h1>Art</h1>
            
        </div>
    );
}

export default ArtPage;