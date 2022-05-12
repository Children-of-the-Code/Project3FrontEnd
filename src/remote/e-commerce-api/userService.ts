import eCommerceClient from "./eCommerceClient";

const baseURL = "/user"

export interface userServiceResponse {
    status: number;
    payload: any;
}

export const apiLogin = async (email: string, password: string): Promise<userServiceResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}/login`,
        { email: email, password: password }
    );
    return { status: response.status, payload: response.data };
}

export const apiRegister = async (firstName: string, lastName: string, email: string, password: string): Promise<userServiceResponse> => {
    const response = await eCommerceClient.post<any>(
        `${baseURL}/register`,
        { firstname: firstName, lastName: lastName, email: email, password: password }
    );
    return { status: response.status, payload: response.data };
}