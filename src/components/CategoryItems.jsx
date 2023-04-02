import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:50vh;
flex: 1;
margin: 3px;
position: relative;
`
const Img = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`
const Info = styled.div`
position:absolute;
top:0;
left: 0;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
`
const Title = styled.h1`
	color: #242121;
	margin-bottom: 20px;
`;
const Button = styled.button`
	border: none;
	padding: 10px;
	background-color: white;
	color: #242121;
	cursor: pointer;
	font-weight: 600;
`;
 const CategoryItems = ({item}) => {
    return (
     
     <Container>
        <Img src={item.img } />
        <Info>
           <Title>{item.title }</Title>
           <Button>Shop Now</Button>
          </Info>
          
    </Container>
  )
}
export default CategoryItems