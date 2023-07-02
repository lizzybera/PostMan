import React from 'react'
import styled from 'styled-components'
import {BsMicrosoft, BsEye, BsLink45Deg} from "react-icons/bs"

interface iCard2{
    pics?: any;
    title?: string;
    text?: string;
    watchers?: string;
    by?: string;
    views?: string;
    width?: string;
    bs?: string;
    display?: string;
    m?: string;
    bb?: string
}

const Card2: React.FC <iCard2> = ({pics,title,text,watchers, by, views, width, bs, bb, display, m}) => {
  return (
    <div>
        <Container  bs={`${bs}`}
          bb={`${bb}`}
        width={`${width}`}
        m={`${m}`}
        >
            <Pics src={pics}/>
            <Div>
                <Holder>
                <Title> {title}
                    
                    </Title>
                <Text> {text}
                    
                    </Text>
                </Holder>
                <Holder2 display={`${display}`}>
                <Div2>
                    <Icon> <BsMicrosoft /></Icon>
                    <T>Workspace</T>
                    <T2>{by}
                        

                    </T2>
                </Div2>
                <Div2>
                    <Icon><BsEye /></Icon>
                    <T> {watchers}
                        
                        </T>
                    <T2> {views}
                        
                        </T2>
                </Div2>
                </Holder2>
            </Div>
            <Copy>
                <BsLink45Deg />
            </Copy>

        </Container>
    </div>
  )
}

export default Card2

const Copy = styled.div`
font-size: 17px;
opacity: 0;
margin-right: 40px;
`
const T2 = styled.div`
margin-left: 20px;
cursor: pointer;
margin-right: 20px;
`

const T = styled.div``

const Icon = styled.div`
margin-right: 5px;
`

const Div2 = styled.div`
display: flex;
margin-top: 10px;
font-size: 13px;
`

const Text = styled.div`
font-size: 13px;
width: 300px;
`

const Title = styled.div`
font-size: 15px;
font-weight: 500;
margin-bottom: 8px;

:hover{
    text-decoration: underline;
}
`

const Holder2 = styled.div<{display:string}>`
display: ${({display})=>display};
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
/* background-color: red; */
margin-right: 7px;
margin-top: -5px;
`

const Container = styled.div<{width: string, bs: string, bb: string, m: string}>`
    width: ${({width})=>width};
    height: 120px;
    border-radius: 5px;
    display: flex;
    padding: 15px;
    margin: ${({m})=> m};
    box-shadow: ${({bs})=> bs};
    border-bottom: ${({bb})=> bb} ;
    /* 1px solid silver; */

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