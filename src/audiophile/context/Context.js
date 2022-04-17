import React, { createContext, useState, useEffect } from 'react'
import * as Realm from 'realm-web'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [fetchStatus, setFetchStatus] = useState("idle")
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    //  const app = new Realm.App({ id: "audiophile-unxuv" });
    // const credentials = Realm.Credentials.anonymous();

    useEffect(() => {
        const fetchData = async () => {
            setFetchStatus("loading")
            // const REALM_APP_ID = "audiophile-unxuv"           
            const REALM_APP_ID = process.env.REACT_APP_AUDIOPHILE;
            const app = new Realm.App({ id: REALM_APP_ID });
            const credentials = Realm.Credentials.anonymous();
            console.log(REALM_APP_ID)

            try {
                const user = await app.logIn(credentials);
                const allProducts = await user.functions.getAllProducts()
                setProducts(await allProducts)
                setFetchStatus("success")
                console.log(allProducts)
            } catch (err) {
                setError(err)
                setFetchStatus("error")
                console.error(error);
            }
        }

        fetchData()
        // setFetchStatus("success")
    }, [error]) 
   
    if (fetchStatus !== "success") {
        return <div>Loading</div>
    }
    return (
        <DataContext.Provider value={{ products }}>
            {props.children}
        </DataContext.Provider>
    )
}