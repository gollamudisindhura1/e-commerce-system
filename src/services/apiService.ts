import { type ProductData } from "../models/Product";
import { ApiError } from "../utils/errorHandler";
import fetch from "node-fetch";

export async function fetchAllProducts(): Promise<ProductData[]>{
    try{
        const response = await fetch("https://dummyjson.com/products?limit=10");
        if(!response.ok){
            throw new ApiError(`Failed to fetch Products: ${response.statusText}`, response.status);
        }
        const data = await response.json();
        const result = data as { products: ProductData[] };
    return result.products;
    }catch (error){
        throw error instanceof ApiError ? error : new ApiError("Network or parsing Error")
    }
}
export async function fetchProductById(id: number): Promise<ProductData>{
    try{
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        if(!response.ok){
            throw new ApiError(`Product ${id} not found`, response.status);
        }
        const data = await response.json();
        return data as ProductData;
    }catch (error){
        throw error instanceof ApiError ? error : new ApiError("Network error");

    }
    
}
