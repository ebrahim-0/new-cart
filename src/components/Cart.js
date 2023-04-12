import { isDisabled } from "@testing-library/user-event/dist/utils";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../rtk/Slices/CartSlice";
import productsSlice from "./../rtk/Slices/ProductSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <>
      <Container className="pt-5">
        <h1>Welcome to Cart</h1>
        <Button
          className="mt-3 mb-3"
          variant="primary"
          onClick={() => dispatch(clear())}
        >
          Clear Cart
        </Button>
        <h5 className="mt-3 mb-3">Total Price : {totalPrice.toFixed(2)} $</h5>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>
                  <Card.Img
                    style={{ width: "100px", height: "100px", padding: "5px" }}
                    variant="top"
                    src={product.image}
                  />
                </td>
                <td>{product.price} $</td>
                <td>{product.quantity}</td>
                <td className="p-2">
                  <Button
                    variant="danger"
                    onClick={() => dispatch(deleteFromCart(product))}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Cart;
