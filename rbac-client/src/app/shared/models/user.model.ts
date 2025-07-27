export interface User {
    id: string;
    userName: string;
    normalizedUserName: string;
    email: string;
    normalizedEmail: string;
    emailConfirmed: boolean;
    passwordHash: string;
    concurrencyStamp: string;
    phoneNumber: string | null;
    phoneNumberConfirmed: boolean;
    twoFactorEnabled: boolean;
    lockoutEnd: Date | null;
    lockoutEnabled: boolean;
    accessFailedCount: number;
  }
  