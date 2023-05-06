import z from 'zod'

export const SearchResultSchema = z.object({
  page_content: z.string()
})

export const SearchResponseBodySchema = z.array(SearchResultSchema)

export type SearchResult = z.infer<typeof SearchResultSchema>
export type SearchResponseBody = z.infer<typeof SearchResponseBodySchema>
