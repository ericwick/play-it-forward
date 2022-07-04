import Checkout from "./Checkout";

export default function Payment(props) {
    return (
        <Checkout
            name={"Thank you for your donation!"}
            description={"checkout"}
            amount={props.amount}
        />
    );
}
