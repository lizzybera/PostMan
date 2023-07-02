import React from 'react'
import styled from 'styled-components'
import img from "../../assets/download.svg"
import img2 from "../../assets/twi.svg"
import img3 from "../../assets/githubsssssss.svg"
import img4 from "../../assets/download (7).svg"
import img5 from "../../assets/download (8).svg"
import img6 from "../../assets/download (6).svg"

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>

           <Div1>
              <Pics src={img}/>
              <Text>© 2023 Postman, Inc.</Text>
           </Div1>

           <Div2>
            <Head>Product</Head>
            <Small>What is Postman?</Small>
            <Small>API Repository</Small>
            <Small>Tools</Small>
            <Small>Governance</Small>
            <Small>Workspace</Small>
            <Small>Integrations</Small>
            <Small>Enterprise</Small>
            <Small>Plans and pricing</Small>
            <Small>Download the app</Small>
            <Small>Support center</Small>
           </Div2>

           <Div3>
           <Head>Company</Head>
            <Small>About</Small>
            <Small>Careers and Culture</Small>
            <Small>Press & Media</Small>
            <Small>Contact Us</Small>
            <Small>Partner program</Small>
            <br />
            <br />

            <Head>Security and terms</Head>
            <Small>Trust and Security</Small>
            <Small>Privacy policy</Small>
            <Small>Terms</Small>
           </Div3>

           <Div4>
           <Head>API Categories</Head>
            <Small>eSignature NEW</Small>
            <Small>Travel</Small>
            <Small>Database</Small>
            <Small>App Security</Small>
            <Small>Payments</Small>
            <br />
            <br />
            
            <Head>Public elements</Head>
            <Small>Collections</Small>
            <Small>APIs</Small>
            <Small>Workspaces</Small>
            <Small>Teams</Small>
            </Div4>

           <Div5> 
           <Head> Social</Head>
            <Small> <Pics2 src={img2} /> Twitter</Small>
            <Small> <Pics2 src={img5} /> LinkedIn</Small>
            <Small> <Pics2 src={img3}/> Github</Small>
            <Small> <Pics2 src={img4}/> YouTube</Small>
            <Small> <Pics2 src={img6}/> Twitch</Small>
            </Div5>
    
        </Main>

      </Container>
    </div>
  )
}

export default Footer

const Pics2 = styled.img`
height: 15px;
margin-right: 10px;
`

const Div5 = styled.div`
margin-top: 40px;

`

const Div4 = styled.div`
margin-top: 40px;

`
const Div3 = styled.div`
margin-top: 40px;

`

const Small = styled.div`
font-size: 13px;
margin-top: 10px;
color: #727171;
display: flex;

:hover{
  color: blue;
  cursor: pointer;
}
`
const Head = styled.div`
font-size: 17px;
margin-bottom: 20px;
font-weight: 700;
color: gray;
display: flex;
`
const Div2 = styled.div`
margin-top: 40px;
`

const Text = styled.div`
font-size: 12px;
margin-left: -120px;
`

const Pics = styled.img`
height: 200px;
margin-bottom: 65px;
margin-right: 120px;
`
const Div1 = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Main = styled.div`
  background-color: #FFFFFF;
  height: 100%;
  width: 85%;
  margin-left: 100px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* background-color: gray; */
`
const Container = styled.div`
  background-color: #FFFFFF;
  height: 400px;
  width: 100%;
  display: flex;
  padding: 40px 0;
  /* justify-content: center; */
  align-items: center;
`