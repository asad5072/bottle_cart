import { useEffect } from "react"
import { useState } from "react"
import Bottle from "../Bottle/Bottle"
import { addToLS, getStoredCart } from "../../utilities/localStorage"
import Cart from "../Cart/Cart"

const Bottles = ()=>{
    const [bottles, setBottles]= useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    // get cart from local Storage
    useEffect(() =>{
        if(bottles.length>0){
            const storedCart = getStoredCart();
            const savedCart = [];
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart)
        }
    }, [bottles])

    const handleAddtoCart = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id)
    }

    return(
        <div className="max-w-7xl mx-auto">
            <p className="text-center">Total Bottles: {bottles.length}</p>
            <Cart cart={cart}></Cart>
            <div className="grid grid-cols-3 gap-6">
            {
                bottles.map(bottle => <Bottle 
                    bottle={bottle}
                    key={bottle.id}
                    handleAddtoCart = {handleAddtoCart}
                ></Bottle>)
            }                
            </div>
        </div>
    )
}

export default Bottles