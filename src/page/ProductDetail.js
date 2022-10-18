import React, { useEffect } from 'react';
import { Button, Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productDetailAction } from '../redux/actions/productDetailAction';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.detail.productDetail)

  useEffect(() => {
    getProductDetail();
  }, [])

  let { id } = useParams();

  const getProductDetail = () => {
    dispatch(productDetailAction.getProductDetail(id))
  }

  return (
    <div>
      <Container>
        <Row >
          <Col > <img src={productDetail.img} width='100%'></img></Col>
          <Col >
            <div className="mb-3">{productDetail.title}</div>
            <div className="mb-3">₩ {productDetail.price}</div>
            <div className="mb-3">{productDetail.choice == true ? 'Conscious choice' : ''}</div>
            <div className="mb-3">
              <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
                {productDetail.size?.map((idx) => (<Dropdown.Item>{idx}</Dropdown.Item>))}

              </DropdownButton>


            </div>
            <div className="mb-3">
              <Button variant="dark">추가</Button>
            </div>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default ProductDetail
