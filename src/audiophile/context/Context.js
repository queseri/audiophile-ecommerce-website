import React, { createContext, useState, useEffect } from 'react'
import * as Realm from 'realm-web'
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Watch } from 'react-loader-spinner'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [fetchStatus, setFetchStatus] = useState("idle")
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

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

            } catch (err) {
                setError(err)
                setFetchStatus("error")
                console.error(error);
            }
        }

        fetchData()

    }, [error])

    if (fetchStatus !== "success") {
        return <div className='loading-flex'>
            <Watch color="#00BFFF" height={200} width={200} />
        </div>
    }
    return (
        <DataContext.Provider value={{ products }}>
            {props.children}
        </DataContext.Provider>
    )
}