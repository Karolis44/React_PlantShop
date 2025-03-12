import { useContext } from "react";
import ProductsContext from "../context/productsContext";


export function useProducts() {

    const context = useContext(ProductsContext)
    if(!context) {
        throw new Error('must be with products provider')
    }
    return context;
}