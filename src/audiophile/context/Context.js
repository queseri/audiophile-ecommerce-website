import React, { createContext, useState, useEffect } from 'react'
import * as Realm from 'realm-web'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [fetchStatus, setFetchStatus] = useState("idle")
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    //  const app = new Realm.App({ id: "audiophile-unxuv" });
    // const credentials = Realm.Credentials.anonymous();
    const fetchData = async () => {
        setFetchStatus("loading")
        const REALM_APP_ID = "audiophile-unxuv"
        const app = new Realm.App({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();

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
    useEffect(() => {
        fetchData()
       // setFetchStatus("success")
    }, [])

    if (fetchStatus !== "success") {
        return <div>Loading</div>
    }
    return (
        <DataContext.Provider value={{ products }}>
            {props.children}
        </DataContext.Provider>
    )
}