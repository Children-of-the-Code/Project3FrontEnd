import Product from "../../models/Product";
import eCommerceClient, { eCommerceApiResponse } from "./eCommerceClient";

const baseURL = "/api/product"

export const apiGetAllProducts = async (): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.get<any>(
        `${baseURL}`
    );
    return { status: response.status, payload: response.data };
}
export const apiGetAllProductsOverZero = async (): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.get<any>(
        `${baseURL}/stocked`
    );
    return { status: response.status, payload: response.data };
}

export const apiGetFeaturedProducts = async (): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.get<any>(
        `${baseURL}/featured`
    );
    return { status: response.status, payload: response.data };
}

export const apiGetProductById = async (id: any): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.get<any>(
        `${baseURL}/${id}`
    );
    return { status: response.status, payload: response.data };
}


export const apiGetProductsOnSale = async (): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.get<any>(
        `${baseURL}/sale`
    );
    return { status: response.status, payload: response.data };
}


export const apiUpsertProduct = async (product: any): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}`,
        product
    );
    return { status: response.status, payload: response.data };
}

export const apiPurchase = async (products: {id: number, quantity: number}[]): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.patch<any>(
        `${baseURL}`,
        products
    );
    return { status: response.status, payload: response.data };
}

export const apiDeleteProduct = async (id: number): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.delete<any>(
        `${baseURL}/${id}`
    );
    return { status: response.status, payload: response.data };
}


export const apiUpdateProduct = async (product: any): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}`,
        product
    );
    return { status: response.status, payload: response.data };
}

export const apiAddProduct = async (name: string): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}`,
        ({ name: name})
    );
    return { status: response.status, payload: response.data };
}
export const apiDeleteFeaturedProduct = async (id: number): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.delete<any>(
        `${baseURL}/${'featured'}/${id}`
    );
    return { status: response.status, payload: response.data };
}
export const apiUpdateSale = async (id: number, sale: number): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}/sale`,
        ({id:id,
        sale:sale})
    );
    return { status: response.status, payload: response.data };
}
export const apiAddFeaturedProduct = async (id: number): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.put<any>(
        `${baseURL}/${'featured'}/${id}`
    );
    return { status: response.status, payload: response.data };
}
