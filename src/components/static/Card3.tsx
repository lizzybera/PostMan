import React from 'react'
import styled from 'styled-components'
import {BsCollection} from "react-icons/bs"

interface iCard3 {
    pics?: any;
    title?: string
    text?: string
    views?: string
    collections?: string
}

const Card3: React.FC<iCard3> = ({pics,title, text, views,collections}) => {
  return (
    <div>
        <Container
        >
            <Pics src={pics}/>
            <Div>

                <Holder>
                <Title>{title}</Title>
                <Text> {text} </Text>
                </Holder>

                <Holder2>
                <Div2>
                    <T2> {views}</T2>
                </Div2>
                <Div2>
                    <Icon> <BsCollection /></Icon>
                    <T2> {collections}
                    </T2>
                </Div2>
                </Holder2>

            </Div>

        </Container>
    </div>
  )
}

export default Card3

const Copy = styled.div`
font-size: 17px;
opacity: 0;
margin-right: 40px;
`
const T2 = styled.div`
margin-left: 8px;
cursor: pointer;
margin-right: 20px;
`

const Icon = styled.div`
margin-left: 20px;
margin-top: 2px;
`

const Div2 = styled.div`
display: flex;
margin-top: 10px;
font-size: 13px;
margin-left: -10px;
`

const Text = styled.div`
font-size: 13px;
margin-top: 10px;
`

const Title = styled.div`
font-size: 15px;
font-weight: 500;
margin-top: 10px;
display: flex;

:hover{
    text-decoration: underline;
}

`

const Holder2 = styled.div`
display: flex;
margin-top: 10px;
`
const Holder = styled.div`
cursor: pointer;
`
const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Pics = styled.img`
height: 30px;
margin-right: 220px;
`

const Container = styled.div`
    width: 250px;
    height: 170px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    margin: 10px 0px;
    border: 1px solid lightgray;
    /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */

    :hover{
        background-color: #F9F9F9;
    }
    
    :hover ${Title}{
        color: blue;
    }

    :hover ${Copy}{
        opacity: 1;
    }
`