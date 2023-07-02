import React from 'react'
import styled from 'styled-components'
import Card3 from '../static/Card3'
import img from "../../assets/cf4b7eed7f318f5c7e41fa598c4c01053eff101f864dd1e28786cdfb1341d532.png"
import img2 from "../../assets/36ae11e83aeada81cfb8c3231472e748fded0b69ecd1d422bfb3df47e30f9e44.png"
import img3 from "../../assets/d6e0c388e5ec0b6b4576089da82c220611be3a3bf3e56e36e25f49e1787db22b.png"
import img4 from "../../assets/wowza5.png"

const Fifth = () => {
  return (
    <div>
        <Container>
            <Main>
                <Up>
                    <Title>Popular teams</Title>
                    <Text>View all teams →</Text>
                </Up>
                <CardHolder>
                    <Card3 
                    pics={img}
                    title='The Kroger Co.'
                    text='With nearly 2,800 stores in 35 states, Kroger is one of the largest retailers, supporting developer and partner integrations with our APIs.'
                    views='1k+ views'
                    collections='4 collections'
                    />
                    
                    <Card3 
                    pics={img2}
                    title='Zoom Developer'
                    text='A Postman space for devs and technical decision makers within the Zoom Developer Platform ecosystem.'
                    views='5k+ views'
                    collections='10+ collections'
                    />
                    <Card3 
                    pics={img3}
                    title='tomorrow-io'
                    text='Tomorrow.io API provides hyperlocal weather data, including historical, real-time, and forecast information, for any location globally.'
                    views='400k+ views'
                    collections='No collections'
                    />

                    <Card3 
                    pics={img4}
                    title='Wowza'
                    text='Wowza offers an integrated video platform and on-premises server software with builder-focused APIs for customizable live and VOD streaming.'
                    views='1k+ views'
                    collections='3 collections'
                    />


                </CardHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Fifth

const CardHolder = styled.div`
margin-top: 20px;
display: flex;
justify-content: space-between;
`
const Text = styled.div`
font-size: 14px;
margin-left: 10px;
color: blue;
margin-top: 5px;
font-weight: 500;
`
const Title = styled.div`
font-size: 20px;
font-weight: 600;
`
const Up = styled.div`
display: flex;
align-items: center;
`
const Main = styled.div`
    width: 90%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Container = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    /* background-color: green; */
    justify-content: center;
    align-items: center;
    padding-bottom: 35px;
`