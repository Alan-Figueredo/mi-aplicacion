import "../components/CartWidget.css"
const CartWidget = ({Cart})=>{
    return(
        <>
            <img className="cart" src={Cart}/>
        </>
        
    );
}
export default CartWidget;