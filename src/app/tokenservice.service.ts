
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenserviceService {
  private accessTokenKey = 'access_token';
  private refreshTokenKey = 'refresh_token';

  // Get Access Token
  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  // Set Access Token
  setAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  // Get Refresh Token
  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  // Set Refresh Token
  setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshTokenKey, token);
  }

  // Clear Tokens
  clearTokens(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }
}
