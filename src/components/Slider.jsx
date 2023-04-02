import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {products} from "../data"

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
`;
const Arrow = styled.div`
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 80%;
	border:solid 0.5px;
	z-index: 2;
`;
const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	align-items: center;
	background-color: #${(props)=>props.bg};
`;
const ImgContainer = styled.div`
	flex: 1;
	height:100%;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
`;
const Image = styled.img`
height:80%;
`;
const Title = styled.h1`
font-size: 60px;
`;
const Desc = styled.p`
	font-size: 20px;
	margin: 50px 0px;
	font-weight: 500;
	letter-spacing: 3px;
`;
const Button = styled.button`
cursor: pointer;
font-size: 20px;
padding: 10px;
background-color: transparent;
`;

const Slider = () => {
	const [slideIndex,setSlideIndex]=useState(0)
	const handleClick = (direction) => {
		if(direction==="left"){
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		}else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	}
	return (
		<Container>
			<Arrow
				direction="left"
				onClick={() => handleClick("left")}>
				<ArrowLeftIcon />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{products.map((item) => (
						<Slide bg={item.bg}>
							<ImgContainer>
								<Image
									src={item.img}
									alt="image not found"
								/>
							</ImgContainer>
							<InfoContainer>
								<Title>{item.title}</Title>
								<Desc>{item.desc}</Desc>
								<Button>Buy now</Button>
							</InfoContainer>
						</Slide>				
				))}
			</Wrapper>
			<Arrow
				direction="right"
				onClick={() => handleClick("right")}>
				<ArrowRightIcon />
			</Arrow>
		</Container>
	);
};
export default Slider;
