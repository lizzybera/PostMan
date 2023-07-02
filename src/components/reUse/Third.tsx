import React from 'react'
import styled from 'styled-components'
import img from "../../assets/api-first-world-book-postman.png"

const Third = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                    <Title>The future is API-first</Title>
                    <Text>At Postman, we believe the future will be built with APIs. The API-first World graphic novel tells the story of how and why the API-first world is coming to be.</Text>
                    <B1>Read the Graphic Novel</B1>
                </Left>
                <Right>
                    <Pics src={img} />
                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default Third

const B1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 160px;
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

const Text = styled.div`
font-size: 13px;
margin-top: 10px;
color: #464646;
display: flex;
height: 10px;
width: 600px;
line-height: 1.5;
margin-bottom: 50px;
`

const Title = styled.div`
font-weight: 500;
font-size: 25px;
`

const Pics = styled.img`
height: 220px;
`
const Right = styled.div`
display: flex;
align-items: end;
`
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const Main = styled.div`
 width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
`
const Container = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: #F9F9F9;
`