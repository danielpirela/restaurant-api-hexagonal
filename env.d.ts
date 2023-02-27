declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number,
            MONGO_USERNAME: string,
            MONGO_PASSWORD: string
        }
    }
}
export {}
