import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import NavBar from './NavBar';

// yarn tsm src (the folder that holds the stuff you want definitions of )

const ArtPage: React.FC = () => {

    const history = useHistory();

    return (
        <div>
            {/* <Button onClick={() => history.push('/')}>Home</Button> */}
            <NavBar />
            <div >
                <h1>Art</h1>
                <h2>
                    <a href='https://grantbrewster.wixsite.com/mysite'>Art Portfolio site</a>
                    </h2>
            </div>
        </div>
    );
}

export default ArtPage;