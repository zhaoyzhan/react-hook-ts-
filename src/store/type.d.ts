
export as namespace IAuthStore


export interface LoginParams {
    account: string
    password: string
}

export interface UserInfo {
    msg?: string
    token?: string
    category?: string
}

