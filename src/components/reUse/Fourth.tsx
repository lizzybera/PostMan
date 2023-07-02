import React from 'react'
import styled from 'styled-components'
import Card2 from '../static/Card2'
import img from "../../assets/b9724884cd02ea2f032eab63b55ac6ea4a2869516a26292bc1368d03c60f2054.png"
import img1 from "../../assets/ce021a35669e86c14c3b71505b7e255a110c9a81a5a0a4f2435cace4b02b3e1c.jpg"
import img3 from "../../assets/pipedrive.png"
import img4 from "../../assets/63021e2ad06381a79ca2adaeb15114da1a5531b817c11ed8640624415728bed2.png"
import img5 from "../../assets/oracle devel.jpg"
import img6 from "../../assets/6ed481cc207e0c0f5a510944cecc259baa4bc1ccc5bd43df14052b0814f7ba7c.png"
import img7 from "../../assets/klavi.png"
import img8 from "../../assets/chatbot.png"
import img10 from "../../assets/18cee3684208448fe6fa09774d9875f3b38642eee6e574cf4af1b811ce0ff2bf.png"

const Fourth = () => {
  return (
    <div>
        <Container>
            <Main>
            <Div>
                        <Title>In the spotlight</Title>
                        <Text>The best APIs, collections, and workspaces handpicked by Postman.
<div>See what more is in the spotlight →</div></Text>
            </Div>
            <Holder>
            <Div>
                        <Title2>Trending APIs this week</Title2>
                        <Text2>
There’s an API for that: discover the APIs, workspaces, and collections the Postman community is creating, viewing, and forking. 
View Complete List →</Text2>
            </Div>
            <Div>
                        <Title2>New and Noteworthy</Title2>
                        <Text2>Discover newly added public workspaces with public APIs from a multitude of industries. 
View Complete List →</Text2>
            </Div>
            </Holder>
            
            <CardHolder>
              
                    <Card2 
                    pics={img1}
                    title='Hyper News API'
                    text='The Hyper News API provides access to the latest news headlines and historical news data'
                    watchers='No watchers'
                    by='By
                    Hyper News API Team'
                    views='1k+ views'
                    width='550px'
                    display='flex'
                    bb='1px solid silver'
                    />

                    <Card2 
                    pics={img}
                    title='
                    Ayrshare Social Posting API'
                    text='Post to social media via an API: Twitter, Instagram, Facebook, LinkedIn, GMB, Telegram, Reddit, and YouTube. https://docs.ayrshare.com.'
                    watchers='5 watchers'
                    by='By
                    Ayrshare'
                    views='1k+ views'
                    width='550px'
                    display='flex'
                    bb='1px solid silver'
                    />

                    <Card2 
                    pics={img3}
                    title='Pipedrive API v1'
                    text='The official Pipedrive API that enables developing apps and integrations on the Pipedrive platform.'
                    watchers='4k+ watchers'
                    by='By
                    Pipedrive APIs'
                    views='20k+ views'
                    width='550px'
                    display='flex'
                    bb='1px solid silver'
                    />
                    <Card2 
                    pics={img4}
                    title='Datafiniti API'
                    text='This workspace contains resources that you can demo and share with customers and partners.'
                    watchers='4 watchers'
                    by='By
                    Datafiniti'
                    views='300+ views'
                    width='550px'
                    display='flex'
                    bb='1px solid silver'
                    />

                    <Card2 
                    pics={img5}
                    title='Oracle Cloud Infrastructure REST APIs'
                    text='The Oracle Cloud Infrastructure APIs are typical REST APIs that use HTTPS requests and responses.'
                    watchers='100+ watchers'
                    by='By
                    Oracle Developers'
                    views='400k+ views'
                    width='550px'
                    display='flex'
                    bb='1px solid silver'
                    />
                
                    <Card2 
                    pics={img6}
                    title='MonsterAPI'
                    text='Access AI models at scale using Monster API for use cases like: Text to image, Image to image, Pix2Pix and Whisper API for speech to text'
                    watchers='10+ watchers'
                    by='By
                    Q Blocks'
                    views='500+ views'
                    width='550px'
                    display='flex'
                    bb='1px solid silver'
                    />
                    
                    <Card2 
                    pics={img7}
                    title='Klaviyo API (Latest Stable) (v2023-06-15)'
                    watchers='50+ watchers'
                    by='By
                    Klaviyo'
                    views='500+ views'
                    width='550px'
                    display='flex'
                    bb='1px solid silver'
                    />
                    
                    <Card2 
                    pics={img8}
                    title='ChatBot.com'
                    text='ChatBot is a natural language understanding framework that allows you to create intelligent chatbots for any service.'
                    watchers='9 watchers'
                    by='By
                    ChatBot'
                    views='5k+ views'
                    width='550px'
                    display='flex'
                    bb='1px solid silver'
                    />
                    
                    <Card2 
                    pics={img}
                    title='Adyen APIs'
                    text='All Adyen APIs with documentation, variables and examples'
                    watchers='20+ watchers'
                    by='By
                    Adyen Developers'
                    views='4k+ views'
                    width='550px'
                    display='flex'
                    bb='1px solid silver'
                    />
                    
                    <Card2 
                    pics={img10}
                    title='Intercom APIs'
                    text='Sample collections, APIs and environments'
                    watchers='9 watchers'
                    by='By
                    Intercom'
                    views='2k+ views'
                    width='550px'
                    display='flex'
                    bb='1px solid silver'
                    />
            </CardHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Fourth

const CardHolder = styled.div`
margin-top: -6px;
display: flex;
justify-content: space-between;
width: 97%;
flex-wrap: wrap;
`
// const I = styled.div`
// `
// const D = styled.div`
// color: blue;
// margin-left: 5px;
// `

const Text2 = styled.div`
font-size: 13px;
margin-top: 5px;
color: #464646;
display: flex;
height: 80px;
width: 600px;
border-bottom: 1px solid silver;
`

const Title2 = styled.div`
font-weight: 500;
font-size: 18px;
margin-top: 20px;
`
const Text = styled.div`
font-size: 13px;
margin-top: 10px;
color: #464646;
display: flex;
height: 10px;
`

const Title = styled.div`
font-weight: 500;
font-size: 25px;
margin-top: 20px;
`
const Div = styled.div`
width: 100%;
`
const Holder = styled.div`
    display: flex;
    margin-top: 10px;
`

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 600px;
    padding: 60px 0;
`