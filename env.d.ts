declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT_USER: number,
            PORT_REVIEW: number,
            MONGO_USERNAME: string,
            MONGO_PASSWORD: string
        }
    }
}
export {}
