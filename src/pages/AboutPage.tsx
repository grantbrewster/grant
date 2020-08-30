import React from 'react';
import Card from '../components/Card'

// yarn tsm src (the folder that holds the stuff you want definitions of )

const AboutPage: React.FC = () => {

    return (
        <div >
            
            <h1>About Page</h1>
            {/* <h2>Songs</h2>
            <h2>Quotes</h2>
            <h2>Problems Worth Solving</h2>
            <h2>Books</h2> */}

            <Card />
        </div>
    );
}

export default AboutPage;