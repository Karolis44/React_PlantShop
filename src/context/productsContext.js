import { createContext } from "react";
import useFetch from "../hooks/useFetch";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {

    const { result: products, loading, error } = useFetch({ url: 'https://gist.githubusercontent.com/Karolis44/2f3d666911bcb024b0b203c66b653501/raw/7f94d8f3b152d5b1ba276dbef392748f2ec38a86/plants.json', folder: 'plants-data', apiImage: 'image' })

    const value = {
        products,
        loading,
        error
    }
    return (
        <ProductsContext.Provider value={value}> { children} </ProductsContext.Provider>
    )
}

export default ProductsContext;




