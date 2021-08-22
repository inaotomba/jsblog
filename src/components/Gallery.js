import React from 'react';
import pic from '../assests/pic3.jpg'


import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import classes from './Gallery.module.css';



export default function Gallery() {
    return (
        <Container >
            <div className={classes.container}>
                <div className={classes.box}>
                    <h3>How to et ahead</h3>
                    <h5>Inaotomba</h5>
                    <p className={classes.normal__letter}>lorem3vnaivj auvhiu auvihi iauva vai ifib oifiifbe ieif
                        k fo eu wefbo efoy
                    </p>
                    <p className={classes.link__letter}>read more</p>
                </div>
                <div className={classes.image}>
                    <img src={pic} />
                </div>
                
            </div>
            
        </Container>
    )
}
