import React from 'react'
import styled from 'styled-components'

interface iCArd{
    pics?: any;
    title?: string;
    text?: string
}

const Card: React.FC<iCArd> = ({pics,title,text}) => {
  return (
    <div>
        <Container>
            <Pics src={pics}/>
            <Title>  {title}
                
                </Title>
            <Text> {text}
                </Text>
        </Container>
    </div>
  )
}

export default Card

const Text = styled.div`
font-size: 13px;
color: #555555;
`

const Title = styled.div`
font-size: 17px;
font-weight: 500;
margin-bottom: 8px;
`

const Pics = styled.img`
height: 30px;
margin-right: 220px;
margin-bottom: 13px;
`

const Container = styled.div`
width: 250px;
height: 150px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
border-radius: 5px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
cursor: pointer;

:hover ${Title}{
  color: blue;
}
`