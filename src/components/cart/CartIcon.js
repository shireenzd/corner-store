import react from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartIcon() {
    return (
        <div className="cart-icon fixed bottom-5 right-5 z-50 w-16 h-16 flex justify-center items-center bg-pink-300 rounded-full shadow-lg transition-transform transform hover:scale-110">
            <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} size="2xl" className="text-white" />
            </Link>
        </div>
    )
}

export default CartIcon;