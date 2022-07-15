export interface typeSinger {
    id: number,
    createdAt: string,
    updatedAt: string,
    createdBy: number,
    updatedBy: number,
    name: string,
    description: string,
    gender: 0 | 1,
    dob: string,
    avatar: string,
    images: string,
    more: string,
    height: number,
    weight: number,
    like: number,
    status: 0 | 1
}