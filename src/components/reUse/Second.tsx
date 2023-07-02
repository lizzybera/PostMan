import React from 'react'
import styled from 'styled-components'
import Card2 from '../static/Card2'
import img from "../../assets/b9724884cd02ea2f032eab63b55ac6ea4a2869516a26292bc1368d03c60f2054.png"
import img2 from "../../assets/8aa22ef6f0e83cc8be8300312a54d02deef77fefd19675920b623498ffbc3f26.png"
import img3 from "../../assets/d6e0c388e5ec0b6b4576089da82c220611be3a3bf3e56e36e25f49e1787db22b.png"
import img4 from "../../assets/merge 4.png"
import img5 from "../../assets/wowza5.png"
import img7 from "../../assets/intel7.png"
import img9 from "../../assets/pew9.png"
import img10 from "../../assets/paypal10.png"

const Second = () => {
  return (
    <div>
        <Container>
            <Main>
            <Div>
                        <Title>What's happening on Postman</Title>
                        <Text><I>
Browse the largest network of APIs and share what you build with developers across the planet. 
</I><D> Explore the Public API Network →</D></Text>
                    </Div>
            
            <CardHolder>
                    <Card2 
                    pics={img}
                    title='Instagram'
                    text='Official Instagram API workspace'
                    watchers='10 watchers'
                    by='By Meta'
                    views='5k+ views'
                    width='345px'
     bs='rgba(0, 0, 0, 0.16) 0px 1px 4px'
     m='10px 0'
                    />

                    <Card2 
                    pics={img2}
                    title='
                    Mastercard Developers'
                    text='A workspace for exploring the Mastercard APIs published on the Mastercard Developers platform.'
                    watchers='9 watchers'
                    by='By Mastercard'
                    views='1k+ views'
                    width='345px'
     bs='rgba(0, 0, 0, 0.16) 0px 1px 4px'
     m='10px 0'
                    />
                    <Card2 
                    pics={img3}
                    title='Tomorrow.io API'
                    text='Tomorrow.io API provides hyperlocal weather data, including historical, real-time and forecast i'
                    watchers='2 watchers'
                    by='By
                    tomorrow-io'
                    views='1k+ views'
                    width='345px'
                    bs='rgba(0, 0, 0, 0.16) 0px 1px 4px'
                    m='10px 0'
                    />

                    <Card2 
                    pics={img4}
                    title='Merge Public Workspace'
                    text="Welcome to Merge's Public Postman collections!"
                    watchers='10 watchers'
                    by='By
                    Merge'
                    views='3k+ views'
                    width='345px'
     bs='rgba(0, 0, 0, 0.16) 0px 1px 4px'
     m='10px 0'
                    />

                    <Card2 
                    pics={img5}
                    title='Wowza Video REST API'
                    text='The Wowza Video API adds live streaming and playback functionality to your applications.'
                    watchers='6 watchers'
                    by='By
                    Wowza'
                    views='3k+ views'
                    width='345px'
     bs='rgba(0, 0, 0, 0.16) 0px 1px 4px'
     m='10px 0'
                    />

                    <Card2 
                    pics={img}
                    title='Dolby.io Media APIs'
                    text='Dolby.io Media APIs Postman Collection'
                    watchers='5 watchers'
                    by='By
                    Dolby'
                    views='5k+ views'
                    width='345px'
     bs='rgba(0, 0, 0, 0.16) 0px 1px 4px'
     m='10px 0'
                    />

                    <Card2 
                    pics={img7}
                    title='Intel® SecL-DC - SGX-Infrastructure'
                    text='Quick start API Collections for SGX Infrastructure and Orchestration use cases of Intel® SecL-DC'
                    watchers='1 watchers'
                    by='By
                    Intel® Security Libraries'
                    views='400+ views'
                    width='345px'
     bs='rgba(0, 0, 0, 0.16) 0px 1px 4px'
     m='10px 0'
                    />

                    <Card2 
                    pics={img}
                    title='Adyen APIs'
                    text='All Adyen APIs with documentation, variables and examples'
                    watchers='20+ watchers'
                    by='By
                    Adyen Developers'
                    views='4k+ views'
                    width='345px'
     bs='rgba(0, 0, 0, 0.16) 0px 1px 4px'
     m='10px 0'
                    />

                    <Card2 
                    pics={img9}
                    title='Pew Research Center'
                    text='This is a public workspace for Pew Research Center.'
                    watchers='1 watchers'
                    by='By
                    API Evangelist'
                    views='1k+ views'
                    width='345px'
     bs='rgba(0, 0, 0, 0.16) 0px 1px 4px'
     m='10px 0'
                    />
                    
                    <Card2 
                    pics={img10}
                    title='PayPal Public API Workspace'
                    text='Postman collection(s) and environment(s)'
                    watchers='50+ watchers'
                    by='By
                    PayPal'
                    views='50k+ views'
                    width='345px'
     bs='rgba(0, 0, 0, 0.16) 0px 1px 4px'
     m='10px 0'
                    />
            </CardHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Second

const CardHolder = styled.div`
margin-top: 30px;
display: flex;
justify-content: space-between;
width: 97%;
flex-wrap: wrap;
`
const I = styled.div`
`
const D = styled.div`
color: blue;
margin-left: 5px;
`
const Text = styled.div`
font-size: 15px;
margin-top: 10px;
color: #464646;
display: flex;
height: 10px;
`

const Title = styled.div`
font-weight: 500;
font-size: 27px;
margin-top: 20px;
`
const Div = styled.div`
width: 100%;
`

const Main = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 90%;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 600px;
    padding: 80px 0;
`