import React from 'react'
import styled from 'styled-components'
import img from "../../assets/postman_logo-removebg-preview.png"
import {BiChevronDown} from "react-icons/bi"
import {BsSearch} from "react-icons/bs"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Container>
          <Main>
            <Div>
                <Logo src={img}/>
                <Navs>
                  Products
                  <Icon><BiChevronDown /></Icon>
                </Navs>
                <Navs>
                  Pricing
                </Navs>
                <Navs>
                  Enterprise
                  <Icon><BiChevronDown /></Icon>
                </Navs>
                <Navs>
                  Resources and Support
                  <Icon><BiChevronDown /></Icon>
                </Navs>
                <Navs>
                  Explore
                </Navs>
            </Div>

            <SearchDiv>
              <Input> <Icon2><BsSearch /></Icon2>Search Postman</Input>
            </SearchDiv>

            <ButtonDiv>
                <B1 to='/signin'>Sign In</B1>
                <B2 to='/signup'>Sign Up for free</B2>
            </ButtonDiv>
          </Main>
      </Container>
    </div>
  )
}

export default Header

const B2 = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
min-width: 60px;
padding: 0 10px;
height: 32px;
background-color: #FF6C37;
border-radius: 5px;
font-weight: 500;
color: white;
cursor: pointer;
text-decoration: none;

:hover{
  background-color: #E05320;
}
`

const B1 = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
width: 70px;
height: 30px;
margin-right: 10px;
font-weight: 300;
border-radius: 5px;
border: 1px solid gray;
cursor: pointer;
text-decoration: none;

:hover{
    border: 1px solid black;
}
`

const ButtonDiv = styled.div`
display: flex;
font-size: 13px;
`

const Icon2 = styled.div`
margin-right: 10px;
font-size: 13px;
`

const Input = styled.div`
  width: 180px;
  height: 35px;
  background-color: #e5e4e4;
  color: #939393;
  border-radius: 5px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

:hover{
  border: 1px solid gray;
}
`

const SearchDiv = styled.div`
width: 200px;
height: 100%;
display: flex;
align-items: center;

`

const Icon = styled.div`
font-size: 20px;
margin-top: 5px;

`

const Navs = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
height: 100%;

:hover{
  color: black;
}

:hover ${Icon}{
color: #211f1f;
}
`

const Logo = styled.img`
height: 35px;
margin-right: 15px;
`

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
color: #6a6a6a;
font-weight: 500;
cursor: pointer;
`

const Main = styled.div`
  width: 98%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const Container = styled.div`
width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
background-color: white;
z-index: 99;
`