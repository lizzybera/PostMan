import React from 'react'
import styled from 'styled-components'
import Card from '../static/Card'
import img from "../../assets/download (3).svg"
import img2 from "../../assets/download (2).svg"
import img3 from "../../assets/download (4).svg"
import img4 from "../../assets/hhh.svg"
import img5 from "../../assets/nnnnn.svg"

const AfterHero = () => {
  return (
    <div>
        <Container>
            <Main>
                <Up>
                    <Div>
                        <Title>What is Postman?</Title>
                        <Text>Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.</Text>
                    </Div>
                    <Pics src={img5}/>
                </Up>
                <Down>
                    <Card 
                    pics={img}
                    title='API Tools'
                    text='A comprehensive set of tools that help accelerate the API Lifecycle - from design, testing, documentation, and mocking to discovery.'
                    />
                    <Card 
                    pics={img2}
                    title='API Repository'
                    text='Easily store, iterate and collaborate around all your API artifacts on one central platform used across teams.'
                    />
                    <Card 
                    pics={img3}
                    title='Workspaces'
                    text='Organize your API work and collaborate with teammates across your organization or stakeholders across the world.'
                    />
                    <Card 
                    pics={img4}
                    title='Governance'
                    text='Improve the quality of APIs with governance rules that ensure APIs are designed, built, tested, and distributed meeting organizational standards.'
                    />
                </Down>
                <D>
                <B1>Learn More</B1>
                </D>
            </Main>
        </Container>
    </div>
  )
}

export default AfterHero

const B1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 90px;
height: 30px;
margin-right: 10px;
font-weight: 300;
border-radius: 5px;
border: 1px solid gray;
cursor: pointer;
font-size: 13px;

:hover{
    border: 1px solid black;
}
`

const D = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
`

const Down = styled.div`
width: 100%;
justify-content: space-between;
margin-top: 45px;
display: flex;
`

const Pics = styled.img`
height: 210px;
position: absolute;
top: -135px;
right: 50px;
`

const Text = styled.div`
font-size: 15px;
width: 580px;
margin-top: 10px;
color: #464646;
`

const Title = styled.div`
font-weight: 500;
font-size: 27px;
margin-top: 20px;
`
const Div = styled.div`
`

const Up = styled.div`
display: flex;
position: relative;
`

const Main = styled.div`
width: 90%;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 500px;
    background-color: #F9F9F9;
`