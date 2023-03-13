import React from'react';
import Button from './Button';

export default  function App (){
return ( <>
    <h1> Hello World</h1>
    <div><Button success>Click Here </Button></div>
    <div><Button secondary warning>Buy Now </Button></div>
    <div><Button danger>See Deals </Button></div>
    <div><Button secondary>Turn Back </Button></div>
    <div><Button primary >TUrn Ahead </Button></div>
    </>
)
}