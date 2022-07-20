import { AnyCnameRecord } from "dns";
import Product from "../../models/Product";
import eCommerceClient, { eCommerceApiResponse } from "./eCommerceClient";

const baseURL = "/api/product"

export const apiGetAllProducts = async (): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.get<any>(
        `${baseURL}`
    );
    return { status: response.status, payload: response.data };
}
export const apiGetFeaturedProducts = async (): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.get<any>(
        `${baseURL}/${'featured'}`
    );
    return { status: response.status, payload: response.data };
}
export const apiGetProductsOnSale = async (): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.get<any>(
        `${baseURL}/${'sale'}`
    );
    return { status: response.status, payload: response.data };
}

export const apiGetProductById = async (id: number): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.get<any>(
        `${baseURL}/${id}`
    );
    return { status: response.status, payload: response.data };
}

export const apiUpsertProduct = async (product: any): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}`,
        Product
    );
    return { status: response.status, payload: response.data };
}
export const apiUpdateProduct = async (id: any, product: any): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.put<any>(
        `${baseURL}/${id}`,
        Product
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
export const apiUpdateSale = async (id: any, sale: number): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}/${'sale'}`,
    );
    return { status: response.status, payload: response.data };
}

export const apiDeleteProduct = async (id: number): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.delete<any>(
        `${baseURL}/${id}`
    );
    return { status: response.status, payload: response.data };
}
export const apiDeleteFeaturedProduct = async (id: number): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.delete<any>(
        `${baseURL}/${'featured'}/${id}`
    );
    return { status: response.status, payload: response.data };
}
export const apiAddFeaturedProduct = async (id: number): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.put<any>(
        `${baseURL}/${'featured'}/${id}`
    );
    return { status: response.status, payload: response.data };
}

