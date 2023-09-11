export interface ReviewEntity {
    uuid: string
    title: string
    content: string
    rating: number
    userId: string
}

export interface ReviewWithUserData extends ReviewEntity {
    name: string | undefined
}
