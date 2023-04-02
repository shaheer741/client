import React from "react";
import SendIcon from "@mui/icons-material/Send";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 60vh;
	background-color: #f5fbfd;
`;
const Title = styled.h1`
	font-size: 70px;
	margin-bottom: 20px;
`;
const Desc = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
`;
const InputContainer = styled.div`
	height: 40px;
	width: 50%;
	justify-content: space-between;
	background-color: white;
	display: flex;
`;
const Input = styled.input`
	flex: 7;
	border: none;
	padding-left: 20px;
`;
const Button = styled.button`
	flex: 1;
	border: none;
	cursor: pointer;
	background-color: teal;
	color: white;
`;

const Newsletter = () => {
	return (
		<Container>
			<Title>NewsLetter</Title>
			<Desc>Get Timely Updates for your favourite products</Desc>
			<InputContainer>
				<Input placeholder="Your Email" />
				<Button>
					<SendIcon />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
