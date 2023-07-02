import React from 'react'
import styled from 'styled-components'
import img from "../../assets/kkkk.svg"

const Sixth = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                    <Title>Get started with Postman</Title>
                    <InputHolder>
                    <Input placeholder='jsmith@example.com'/>
                    <Div>Sign Up For Free</Div>
                    </InputHolder>
                </Left>

                <Right>
                    <Pics src={img} />
                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default Sixth

const Pics = styled.img`
height: 160px;
`
const Right = styled.div`

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
margin-top: 10px;
`

const Title = styled.div`
font-size: 20px;
font-weight: 500;
/* background-color: green ; */
`
const Left = styled.div`

`

const Main = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 320px;
    background-color: #F9F9F9;
`