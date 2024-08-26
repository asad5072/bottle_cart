const getStoredCart = ()=>{
    const storageCartStirng = localStorage.getItem('cart')
    if(storageCartStirng){
        return JSON.parse(storageCartStirng)
    }
    return []
}

const saveCartToLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}
const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    // save to the localStorage
    saveCartToLS(cart);
}

export {addToLS, getStoredCart}