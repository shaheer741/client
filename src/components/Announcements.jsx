import React from 'react'
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	background-color: #01807f;
	align-items: center;
	justify-content: center;
	height: 30;
   color :white ;
   padding: 5px;
`;

const Announcements = () => {
  return (
     <Container>
        Free Shipping on orders above Rs.1000
     </Container>
  )
}

export default Announcements