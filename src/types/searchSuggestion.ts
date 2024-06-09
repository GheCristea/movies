export type SearchSuggestion = {
    name?: string
    id?: number
    image?: string
    genres?: string[]
}

export type SearchSuggestionsCache = Map<string, SearchSuggestion>
