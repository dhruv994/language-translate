import React from 'react';
import Button from '../components/Button';

import { GoBell } from 'react-icons/go'

export default function ButtonPage() {
    return (<>
        <h1> Hello World</h1>
        <div><Button success rounded outline>Click Here </Button></div>
        <div><Button warning>Buy Now </Button></div>
        <div><Button danger>See Deals </Button></div>
        <div><Button secondary outline rounded> <GoBell /> Turn Back </Button></div>
        <div><Button primary >Turn Ahead </Button></div>
        <div><Button warning >Turn Around </Button></div>
    </>
    )
}