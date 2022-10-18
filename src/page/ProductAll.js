import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import { productAction } from '../redux/actions/productAction';

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList)
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get('q') || "";
    console.log('searchQuery는?', searchQuery)
    dispatch(productAction.getProducts(searchQuery))
  }
  useEffect(() => {
    getProducts();
  }, [query])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (<Col lg={3} className='product'> <ProductCard item={item} ></ProductCard></Col>))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
