import apiClient from "@/plugins/axios";
import type { IApiResponse } from "@/types/services/api/IApiResponse";
import type { IApiService } from "@/types/services/api/IApiService";
import type { AxiosInstance } from "axios";

class ApiService implements IApiService {
    private apiClient: AxiosInstance;

    constructor() {
        this.apiClient = apiClient;
    }

    public async sendRequest<T>(url: string, method: string, data?: any, params?: any, headers?: any): Promise<IApiResponse<T>> {
        if (!url) {
            throw new Error("URL is required");
        }
        try {
            let res: any;
            switch (method.toLowerCase()) {
                case 'get':
                    res = await this.apiClient.get(url, { params, headers });
                    break;
                case 'post':
                    res = await this.apiClient.post(url, data, { params, headers });
                    break;
                case 'put':
                    res = await this.apiClient.put(url, data, { params, headers });
                    break;
                case 'delete':
                    res = await this.apiClient.delete(url, { params, headers });
                    break;
            }
            return res.data;
        } catch (error) {
            return (error as any).response.data;
        }
    }
}

export const apiService = new ApiService();