import React, { createContext } from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
    return (
        <DataContext.Provider>
            {props.children}
        </DataContext.Provider>
    )
}