import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Container = styled.div``

const Wrapper = styled.div``;

const Title = styled.h1``;

const Top = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
margin: 0px 20px;
`;

const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === "filled" && "none"};
	background-color: ${(props) =>
		props.type === "filled" ? "black" : "transparent"};
	color: ${(props) => props.type === "filled" && "white"};
`;

const TopCenter = styled.div`
display: flex;`;

const TopCenterText = styled.span`
text-decoration:underline;
padding: 10px;
`;

const Bottom = styled.div`
	display: flex;
	padding: 20px;
	margin: 0px 20px;
`;

const Info = styled.div`
display: flex;
flex-direction: column;
flex:3;
`;

const ProductInfo = styled.div`
display: flex;
flex:2;
padding: 5px;
`;

const Image = styled.img`
width: 200px;
margin-right: 20px;
`;

const ProductDetails = styled.div`
text-align:left;
display: flex;
flex-direction:column;
`;

const Text = styled.h3`
margin-right: 10px;
font-size: 18px;
margin: 5px 0px;
`;

const Detail = styled.span`
font-weight: 200;`;

const Color=styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: #${props => props.color};
   margin: 5px 0px;
`

const PriceInfo = styled.div`
flex:1;
display: flex;
flex-direction: column;
`;

const QuantityBlock = styled.div`
padding: 30px;
display: flex;
align-items: center;
justify-content: center;
`;


const Quantity = styled.span`
	font-size: 24px;
`;

const Price = styled.span`
font-weight: 200;
font-size: 24px;
`;

const Hr=styled.hr`
`

const Summary = styled.div`
	flex: 1;
	border: 1px solid lightgray;
	height: 50vh;
	padding: 10px;
	
`;

const SummaryTitle = styled.h1`
font-weight: 200;`

const SummaryItem = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	font-weight: ${(props) => props.type === "total" && "500"};
	font-size: ${(props) => props.type === "total" && "24px"};
`;

const Heading = styled.span``;

const Value = styled.span``;

const Button = styled.button`
	padding: 10px;
	width: 100%;
	margin-top: 20px;
	font-weight: 600;
	cursor: pointer;
	border: none;
	background-color: black;
	color: white;
`;

const Cart = () => {
  return (
			<Container>
				<Navbar />
				<Announcements />
				<Wrapper>
					<Title>YOUR BAG</Title>
					<Top>
						<TopButton>CONTINUE SHOPPING</TopButton>
						<TopCenter>
							<TopCenterText>Shopping Bag(2)</TopCenterText>
							<TopCenterText>Your Wishlist(0)</TopCenterText>
						</TopCenter>
						<TopButton type='filled'>CHECKOUT NOW</TopButton>
					</Top>
					<Bottom>
						<Info>
							<ProductInfo>
								<Image src="https://m.media-amazon.com/images/I/81CdmYzdxiL._AC_SX425_.jpg" />
								<ProductDetails>
									<Text>
										Product:<Detail> Square Wall Rack</Detail>
									</Text>
									<Text>
										Id:<Detail> 2300786</Detail>
									</Text>
									<Color color="3D3630" />
									<Text>
										Size:<Detail> M</Detail>
									</Text>
								</ProductDetails>
								<PriceInfo>
									<QuantityBlock>
										<AddOutlinedIcon />
										<Quantity>1</Quantity>
										<RemoveOutlinedIcon />
									</QuantityBlock>
									<Price>RS 2500</Price>
								</PriceInfo>
							</ProductInfo>
							<Hr />
							<ProductInfo>
								<Image src="https://m.media-amazon.com/images/I/81CdmYzdxiL._AC_SX425_.jpg" />
								<ProductDetails>
									<Text>
										Product:<Detail> Square Wall Rack</Detail>
									</Text>
									<Text>
										Id:<Detail> 2300786</Detail>
									</Text>
									<Color color="3D3630" />
									<Text>
										Size:<Detail> M</Detail>
									</Text>
								</ProductDetails>
								<PriceInfo>
									<QuantityBlock>
										<AddOutlinedIcon />
										<Quantity>1</Quantity>
										<RemoveOutlinedIcon />
									</QuantityBlock>
									<Price>RS 1800</Price>
								</PriceInfo>
							</ProductInfo>
						</Info>
						<Summary>
							<SummaryTitle>ORDER SUMMARY</SummaryTitle>
							<SummaryItem>
								<Heading>SubTotal:</Heading>
								<Value>RS 2500</Value>
							</SummaryItem>
							<SummaryItem>
								<Heading>Estimated Shipping:</Heading>
								<Value>RS 550</Value>
							</SummaryItem>
							<SummaryItem>
								<Heading>Shipping Discount:</Heading>
								<Value>-RS 550</Value>
							</SummaryItem>
							<SummaryItem type='total'>
								<Heading>Total:</Heading>
								<Value>RS 2500</Value>
							</SummaryItem>
							<Button>CHECKOUT NOW</Button>
						</Summary>
					</Bottom>
				</Wrapper>
				<Footer />
			</Container>
		);
}

export default Cart