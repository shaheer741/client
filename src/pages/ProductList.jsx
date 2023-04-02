import React from "react";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;
const Title = styled.h1`
	font-size: 25px;
	text-align: left;
	margin-left: 20px;
`;
const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Filter = styled.div`
	margin: 20px;
`;
const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 15px;
`;
const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
	return (
		<Container>
			<Navbar />
			<Announcements />
			<Title>Wall Decoration Items</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter by:</FilterText>
					<Select defaultValue={"Color"}>
						<Option disabled>Color</Option>
						<Option>Red</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Green</Option>
					</Select>
					<Select defaultValue={"Size"}>
						<Option disabled>Size</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort by:</FilterText>
					<Select>
						<Option>Latest</Option>
						<Option>Price (Ascending)</Option>
						<Option>Price (Descending)</Option>
					</Select>
				</Filter>
			</FilterContainer>

			<Products />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductList;
