import React, { createContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import * as Realm from 'realm-web'
import { toast } from 'react-toastify';
import { Watch } from 'react-loader-spinner'

export const DataContext = createContext()

export const DataProvider = (props) => {

    const [fetchStatus, setFetchStatus] = useState("idle")
    const [products, setProducts] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [error, setError] = useState(null)
    const [cart, setCart] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [timer, setTimer] = useState(0)
    const { pathname } = useLocation()

    useEffect(() => {
        const fetchData = async () => {
            setFetchStatus("loading")
            // const REALM_APP_ID = "audiophile-unxuv"           
            const REALM_APP_ID = process.env.REACT_APP_AUDIOPHILE;
            const app = new Realm.App({ id: REALM_APP_ID });
            const credentials = Realm.Credentials.anonymous();
           
            try {
                const user = await app.logIn(credentials);
                const allProducts = await user.functions.getAllProducts()
                setProducts(await allProducts)
                setFetchStatus("success")

            } catch (err) {
                setError(err)
                setFetchStatus("error")
                console.error(error);
            }
        }

        fetchData()

    }, [error])

    useEffect(() => {
        console.log(`quantity has been increased`)
    }, [quantity, cart])

    function addToCart(address, name, currency) {
       
        const urlArray = pathname.split("/")
        const partialUrl = urlArray[urlArray.length - 1]

        const newObject = {
            id: address,
            productName: name,
            image: `../../assets/cart/image-${partialUrl}.jpg`,
            price: currency,
            qty: quantity
        }

        if (cart.length === 0) {
            toast.success("Item added to cart")           
            return setCart(() => ([...cart, newObject]))
        } else {
            const findProduct = cart.find(item => item.id === address)           
            if (!findProduct) {               
                toast.success("Another item has been added to cart")
                return setCart(() => ([...cart, newObject]))
            } else {              
                toast.warning("Item is present in the cart")
              //  console.log(`the address and the obj id are the same`)
                return setCart(() => cart.map(item => item.id === address ? { ...item, qty: quantity } : item))
            }

        }

    }

    function handleCart() {       
        setIsOpen(!isOpen)
    }

    const handleAdd = () => {
        setQuantity(() => quantity + 1)      
    }

    const handleMinus = () => {
        quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1)       
    }

    if (fetchStatus !== "success") {
        const fetchStatusTimer = setInterval(() => {
            setTimer(() => timer + 1)
            if (fetchStatus) {
                clearInterval(fetchStatusTimer)
            }

        }, 1000)

        return timer > 10 ?
            <div className='loading-flex'>
                <Watch color="#00BFFF" height={200} width={200} />
                <h2>Loading has taken longer than expected </h2>
                <p>Please check your network!</p>
            </div> :

            <div className='loading-flex'>
                <Watch color="#00BFFF" height={200} width={200} />
                <p>Loading... {timer} sec</p>
            </div>
    }
   
    return (
        <DataContext.Provider value={{
            products, quantity, handleAdd, handleMinus,
            cart, setCart, addToCart, handleCart, isOpen, setIsOpen
        }}>
            {props.children}
        </DataContext.Provider>
    )
}