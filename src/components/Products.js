import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/Slices/ProductSlice";
import { addToCart } from "../rtk/Slices/CartSlice";

function Products() {
  const products = useSelector((state) => state.products);
  //   const cart = useSelector((state) => state);
  //   console.log(cart);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container style={{ marginTop: "60px" }}>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <Card style={{ width: "18rem", margin: "20px" }}>
                <Card.Img
                  style={{ height: "300px", padding: "5px" }}
                  variant="top"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price} $</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Products;
