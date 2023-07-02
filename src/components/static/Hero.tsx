import React from 'react'
import styled from 'styled-components'
import img from "../../assets/microsoft-logo-light.a08a342.svg"
import img2 from "../../assets/download (1).svg"
import img3 from "../../assets/linux-logo-light.c97e8fe.svg"
import img4 from "../../assets/newwww.png"

const Hero = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                    <Title>Build</Title>
                    <Title2>APIs together</Title2>
                    <Text>Over 25 million developers use Postman. Get started by signing up or downloading the desktop app.</Text>

                    <InputHolder>
                    <Input placeholder='jsmith@example.com' />
                    <Div>Sign Up For Free</Div>
                    </InputHolder>

                    <Text2>Download the desktop app for</Text2>

                    <PicsHolder>
                        <Pics src={img} />
                        <Pics src={img2} />
                        <Pics src={img3} />
                    </PicsHolder>
                </Left>
                <Right>
                    <Pics2 src={img4} />
                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default Hero

const Pics2 = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
margin-top: 15px;
`

const Right = styled.div`
height: 90%;
width: 72%;
display: flex;
justify-content: flex-end;
`

const Pics = styled.img`

`

const PicsHolder = styled.div`
display: flex;
margin-top: 10px;
`

const Text2 = styled.div`
font-size: 13px;
color: #4b4b4b;
font-weight: 500;
margin-top: 30px;
`

const Div = styled.div`
width: 35%;
display: flex;
justify-content: center;
align-items: center;
background-color: #EE6D3F;
font-size: 15px;
outline-color: #EE6D3F;
color: white;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
cursor: pointer;

:hover{
background-color: #db6337;
}
`

const Input = styled.input`
width: 65%;
height: 90%;
outline: 1px solid #EE6D3F;
border: none;
background-color: white;
margin-top: 1px;
padding-left: 10px;

::placeholder{
    font-size: 15px;
}
`

const InputHolder = styled.div`
display: flex;
height: 37px;
width: 400px;
border-radius: 5px;
margin-top: 30px;
`

const Text = styled.div`
font-size: 17px;
width: 380px;
color: #232323;
margin-top: 5px;
`

const Title2 = styled.div`
font-size: 30px;
`

const Title = styled.div`
font-size: 40px;
font-weight: 500;
margin-top: 5px;
`

const Left = styled.div`
height: 100%;
width: 28%;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: 40px;
`

const Main = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 580px;
`