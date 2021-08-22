import React from 'react';
import styled from 'styled-components';
import classes from './Blog.module.css';
import pic from '../assests/pic3.jpg'

const Container = styled.div`
    padding-top:4rem;
    width:80%;
    margin:auto;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    text-align:right;

`

const Button = styled.button`
    padding:.75rem 2rem;
    text-align:center;
`;

const NormalLetter = styled.p`
        padding-bottom:1rem ;
        line-height:2rem;
`;

export default function Blog() {
    return (
        <Container>
                <img src={pic} alt="" />
            
            <div class="planning__words">
                <h6 class="small__title">Visual Planner</h6>
                <h4 class="medium__title">Plan your valuable journey of web 
                    development in minutes</h4>
                <NormalLetter>
                lorem ewfewgvawrharhawrgwaegvwaeegvav awasb asbabWAbab 
                    a wefga ew agwg eggvwg awe rg a gagaf rg rarg v wvrg r grgewf ef
                </NormalLetter>
                   
                <div class="button">
                    <Button className={classes.button}>Create free Account</Button>
                </div>
            </div>
        
        </Container>
            
    )
}
