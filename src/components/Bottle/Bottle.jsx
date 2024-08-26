import PropTypes from 'prop-types';

const Bottle = ({bottle, handleAddtoCart}) =>{
    const {title, price, image} = bottle
    
    return(
        <div className='border p-2'>
            <p>Name: {title} </p>
            <p>Price: {price} </p>
            <img className='max-h-16' src={image} alt="" />
            <button onClick={() => handleAddtoCart(bottle)} className='max-w-max bg-slate-400 hover:bg-slate-500 rounded px-2 py-1 mt-4'>add to cart</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddtoCart: PropTypes.func.isRequired,
  };
  
  export default Bottle;