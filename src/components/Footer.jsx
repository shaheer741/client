import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Container = styled.div`
	display: flex;
`;
const Left = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;
const Logo = styled.h1`
	margin-bottom: 5px;
`;
const Desc = styled.p``;
const IconContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const SocialIcon = styled.div`
	color: white;
	border-radius: 50%;
	background-color: #${(props) => props.color};
	width: 40px;
	height: 40px;
	align-items: center;
	justify-content: center;
	display: flex;
	margin-right: 20px;
`;
const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;

const List = styled.ul`
	margin: 0px;
	padding: 0px;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	text-align: left;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;
const ContactIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
`;
const ContactIcon = styled.div`
	padding: 5px;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>TrendyDecor</Logo>
				<Desc>
					This website is home to all the items you need for decorating your home,
					office or kitchen
				</Desc>
				<IconContainer>
					<SocialIcon color="293D6A">
						<FacebookIcon />
					</SocialIcon>
					<SocialIcon color="3A77A2">
						<TwitterIcon />
					</SocialIcon>
					<SocialIcon color="8B243A">
						<InstagramIcon />
					</SocialIcon>
				</IconContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Men's Fashion</ListItem>
					<ListItem>Women's Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact Us</Title>
				<ContactIconContainer>
					<ContactIcon>
						<LocationOnOutlinedIcon style={{ marginRight: "20px" }} />
						Block-X Gulshan Iqbal Rahimyar Khan
					</ContactIcon>
					<ContactIcon>
						<LocalPhoneOutlinedIcon style={{ marginRight: "20px" }} />
						+923340385575
					</ContactIcon>
					<ContactIcon>
						<EmailOutlinedIcon style={{ marginRight: "20px" }} />
						trendydecor.pk@gmail.com
					</ContactIcon>
				</ContactIconContainer>
			</Right>
		</Container>
	);
};

export default Footer;
