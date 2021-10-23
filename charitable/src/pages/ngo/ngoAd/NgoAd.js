
import React from 'react';
import {
    Container,
    Container1,
    Heading1,
    Heading2,
    Para1,
    Card,
    CardWrap,
    Button
} from './style';
import {useHistory} from 'react-router-dom';

const NgoAd = () => {
    const history=useHistory();
    return (
        <Container1>
        <Container>
            <Heading1>Welcome</Heading1>
            <Para1>View Any Card you like</Para1>
            <hr />
            <CardWrap>
                
            <Card>
                <Heading2>All Donations</Heading2>
                <Para1>Click on the button to view all the donation </Para1>
                <Button onClick={()=> history.push('/AllCards')} primary='true'>View All</Button>
            </Card>

            <Card>
                <Heading2>Accepted Donations</Heading2>
                <Para1>click on the button to view Your 
                    accepted donations</Para1>
                <Button onClick={()=> history.push('/AcceptedCards')} primary='true'>View Accepted</Button>
            </Card>
            </CardWrap>
        </Container>
        </Container1>
    )
}

export default NgoAd
