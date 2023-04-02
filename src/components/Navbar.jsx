import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

const Container = styled.div`
	height: 40px;
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Left = styled.div`
	display: flex;
`;
const LeftItems = styled.div`
	font-size: 15px;
	margin-left: 10px;
`;
const Language = styled.div`
	cursor: pointer;
`;
const Input = styled.input`
	border: solid 1px;
	height: 15px;
`;
const Search = styled.div`
cursor:pointer;
`
const Center = styled.div`
	font-size: 25px;
	font-weight: bold;
`;
const Right = styled.div`
	cursor: pointer;
	display: flex;
`;
const MenuItems = styled.div`
	font-size: 15px;
	margin-left: 10px;
`;
const Navbar = () => {
	return (
		<Container>
			<Left>
				<LeftItems>
					<Language>EN</Language>
				</LeftItems>
				<LeftItems>
					<Input />
				</LeftItems>
				<LeftItems>
					<Search>
						<SearchIcon />
					</Search>
				</LeftItems>
			</Left>
			<Center>Trendy Decor</Center>
			<Right>
				<MenuItems>SIGN UP</MenuItems>
				<MenuItems>LOG IN</MenuItems>
				<MenuItems>
					<Badge
						badgeContent={4}
						color="primary">
						<ShoppingCartOutlinedIcon />
					</Badge>
				</MenuItems>
			</Right>
		</Container>
	);
};
export default Navbar;
