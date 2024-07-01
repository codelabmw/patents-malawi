export type Patent = {
    id?: bigint,
    title: string,
    summary: string,
    body: string,
    created_at: bigint,
    updated_at: bigint,
    category: string,
    tags: string[],
    user: string,
    author: string,
}
