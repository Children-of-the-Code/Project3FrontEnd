import ProductPurchaseDto from "../../models/ProductPurchaseDto";
import eCommerceClient, { eCommerceApiResponse } from "./eCommerceClient";

const baseURL = "/product"

export const apiPurchase = async (products: ProductPurchaseDto[]): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.patch<any>(
        `${baseURL}/purchase`,
        { products: products }
    );
    return { status: response.status, payload: response.data };
}