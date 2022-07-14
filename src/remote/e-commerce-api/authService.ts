import eCommerceClient, { eCommerceApiResponse } from "./eCommerceClient";

const baseURL = "/auth"

export const apiLogin = async (email: string, password: string): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}/login`,
        { email: email, password: password }
    );
    return { status: response.status, payload: response.data };
}

export const apiLogout = async (): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}/logout`
    );
    return { status: response.status, payload: response.data };
}

export const apiRegister = async ( email: string, firstName: string, lastName: string, password: string): Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}/register`,
        ({ firstName: firstName, lastName: lastName, email: email, password: password })
    );
    return { status: response.status, payload: response.data };
}

export const apiSession = async():Promise<eCommerceApiResponse> => {
    const response = await eCommerceClient.get(
        `${baseURL}/session`
    );
    return { status: response.status, payload: response.data };
}