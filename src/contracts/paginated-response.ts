export interface PaginatedResponse<T> {
    data: T[],
    page: number,
    size: number,
    totalCount: number,
    totalPages: number,
    hasPreviosPage: boolean,
    hasNextPage: boolean
}