import { authService } from '@/services/authService';
import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies();

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 5000,
});

apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = cookies.get("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        const language = cookies.get("language") ?? import.meta.env.VITE_DEFAULT_LANG;
        if (language) {
            config.headers['Accept-Language'] = language;
        }

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    async (error: AxiosError) => {
        if (error.status === 401) {
            try {
                authService.logout();
            } catch (error) {
                console.error(error);
            }
        } else if (error.status === 403) {
            try {
                await authService.refreshToken();
            } catch (error) {
                authService.logout();
                console.error(error);
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;