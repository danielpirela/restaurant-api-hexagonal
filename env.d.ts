<<<<<<< HEAD
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
=======
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT_USER: number
            PORT_POST: number
            MONGO_USERNAME: string
            MONGO_PASSWORD: string
        }
    }
}
export {}
>>>>>>> 452c12968e773914fdb978a569c50051cf4fb598
