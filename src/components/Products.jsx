import React from 'react'
import styled from 'styled-components'
import { products_list } from '../data'
import ProductItems from './ProductItems'


const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
const Products = () => {
  return (
     <Container>
        {products_list.map((item) => (
           <ProductItems item={item} key={item.id } />
        ))}
    </Container>
  )
}

export default Products