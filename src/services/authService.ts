import type { IAuthService } from "@/types/services/auth/IAuthService";

class AuthService implements IAuthService {
    logout() {

    }

    async refreshToken() {

    }
}

export const authService = new AuthService();