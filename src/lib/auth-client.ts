import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
     baseURL: "http://localhost:3000"
    // baseURL: "http://192.168.1.9:3000"
})