import React from "react";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import styled from "styled-components";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Container = styled.div``;
const Wrapper = styled.div`
	display: flex;
	padding: 20px;
`;
const ImgContainer = styled.div`
	flex: 1;
	padding: 10px;
	margin-top: 20px;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 10px;
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-top: 20px;
`;
const Image = styled.img``;

const Title = styled.h1`
	font-weight: 200;
	margin-top: 0;
`;

const Desc = styled.p``;

const Price = styled.span`
	font-size: 40px;
	font-weight: 200;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
`;

const Filter = styled.div`
	display: flex;
	align-items: center;
`;

const FilterText = styled.h3`
	font-weight: 300;
	margin-right: 10px;
`;

const FilterColorOption = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: #${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`;
const FilterSize = styled.select`
	padding: 5px;
`;

const FilterSizeOption = styled.option``;

const QuantityContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
	margin-top: 10px;
`;

const Left = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Right = styled.div``;

const Quantity = styled.div`
	width: 25px;
	height: 25px;
	border: solid 1px teal;
	align-items: center;
	justify-content: center;
	display: flex;
	border-radius: 35%;
`;

const Button = styled.button`
	padding: 10px;
	border: 2px solid teal;
	cursor: pointer;
	&:hover {
		background-color: #f8f4f4;
	}
`;

const SingleProduct = () => {
	return (
		<Container>
			<Navbar />
			<Announcements />
			<Wrapper>
				<ImgContainer>
					<Image src="https://m.media-amazon.com/images/I/81CdmYzdxiL._AC_SX425_.jpg" />
				</ImgContainer>
				<InfoContainer>
					<Title>Square Wall Rack with Shelves</Title>
					<Desc>
						Maximize the space in your home with the Architectural Elements shadow
						box. These boxes install easily in any space wall of your home and are
						very sturdy, Furniture grade finish and quality craftsmanship make these
						shelves truly unique. Simple installation, hardware included.
					</Desc>
					<Price>RS 3500</Price>
					<FilterContainer>
						<Filter>
							<FilterText>Color:</FilterText>
							<FilterColorOption color="B27C63" />
							<FilterColorOption color="1E1E1E" />
							<FilterColorOption color="3D3630" />
						</Filter>
						<Filter>
							<FilterText>Size:</FilterText>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<QuantityContainer>
						<Left>
							<RemoveOutlinedIcon />
							<Quantity>1</Quantity>
							<AddOutlinedIcon />
						</Left>
						<Right>
							<Button>ADD TO CART</Button>
						</Right>
					</QuantityContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default SingleProduct;
