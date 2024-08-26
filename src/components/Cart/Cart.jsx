import PropTypes from 'prop-types';

const Cart = ({cart}) =>{
    return(
        <div>
            <p className="text-center mb-5">In Cart: {cart.length}</p>
            <div className="flex items-center justify-center gap-1">
                <div className="max-w-[100px] flex gap-1">
                    {
                        cart.map(bottle => <img className="h-12 border p-2 mb-4" src={bottle.image} key={bottle.id}></img>)
                    }
                </div>
            </div>

        </div>
    )

}

Cart.propTypes = {
    cart: PropTypes.array.isRequired
  };

export default Cart