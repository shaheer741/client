import React from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
		url(https://media.designcafe.com/wp-content/uploads/2022/09/19152202/luxury-home-decor.jpg)
			center;
	display: flex;
	background-size: cover;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	width: 25%;
	background-color: white;
	padding: 20px;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
	text-align: left;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin-bottom: 10px;
	padding: 10px;
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;
const Link = styled.a`
	text-align: left;
	margin-top: 5px;
	text-decoration: underline;
	cursor: pointer;
`;
const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder="username" />
					<Input placeholder="password" />
					<Button>LOGIN</Button>
					<Link>Forgot Password?</Link>
					<Link>Create a new account</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
