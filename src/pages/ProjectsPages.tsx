import React from 'react';
import styles from '../assets/WorkPage.module.scss';

import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import NavBar from './NavBar';
import Card from '../components/Card'
import { Container, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// yarn tsm src (the folder that holds the stuff you want definitions of )

const ProjectsPage: React.FC = () => {

    const history = useHistory();

    return (

        <div>
            {/* <Button onClick={() => history.push('/')}>Home</Button> */}
            <NavBar />
            <Grid  container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    spacing={8}
            > 
                <Grid item >
                <Typography variant='h1'>
                    What Have I Done?
                </Typography>
                </Grid>
                <Grid item>
                <Typography variant='h2'>
                    Code
                </Typography>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item>
                        <Card title={'Full-Stack Distributed Search Engine (Mini-Google)'}
                            content={['Multi-threaded, distributed Mercator-crawler ran on' +
                                'AWS EC2 instances implemented with Apache Storm architecture, TF-' +
                                'IDF/PageRank written in PySpark and deployed on an EMR cluster, React front-end/Spark Java backend hosted on EC2.']} />
                    </Grid>
                    <Grid item>
                        <Card title={'Computer Vision for Agriculture Research funded by National Science Foundation (NSF)'}
                            content={['Built a segmentation model to estimate leaf area/weight, leaf disease classifier, and ' +
                                'deployed models to run in browser using' +
                                'Tensorflow.js. Explored regressors and LSTMs for time-series data from the Autonomous Greenhouse Challenge.',
                                'Research conducted with Dr. Rahul Mangharam for the Internet of Things for Precision Agriculture NSF Engineering Research Center.']} />
                    </Grid>
                    <Grid item>
                        <Card title={'Satellite-Based Landslide Detection Using Convolutional Neural Networks (CNN)'}
                            content={['Utilized geospatial tools like GeoPandas, QGis, and ArcGIS servers to create ' +
                                'a dataset with positive/negative examples of landslides in' +
                                ' Oregon. Built a CNN to predict locations with historical landslides,' +
                                ' achieving an F1-score of 86.5% on a held-out test set.']} />
                    </Grid>
                    <Grid item>
                        <Card title={'This Website'}
                            content={['Typescript, HTML/SASS, React ']} />
                    </Grid>
                    <Grid item>
                        <Card title={'Mini-Minecraft (CIS 560 Final project)'}
                            content={['Typescript, HTML/SASS, React ']} />
                    </Grid>
                </Grid>
                <Typography variant='h1'>
                    Philanthropy
                </Typography>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item>
                        <Card title={'TourDeJersey'}
                            content={['In two weeks, trained for a 70 mile bike ride across New Jersey,' + 
                            'raised $20,000, and <had fun for charities helping social justice initiatives']} />
                    </Grid>
                    <Grid item>
                        <Card title={'MAD4Kids (Make a Difference for Kids)'}
                            content={['Founded in 7th grade, an initiative to raise money for annual service trips to Guatemala' + 
                            ', raising $100,000 over the course of 7 years.']} />
                    </Grid>
                    <Grid item>
                        <Card title={'BnB'}
                            content={['Organized parties across New Jersey to raise money for initiatives in Guatemala.']} />
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
}

export default ProjectsPage;