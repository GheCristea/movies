import type { APIRoute } from 'astro';
import axios from 'axios';
import type { SearchResult } from '../../types/SearchResult';
import type { SearchSuggestion } from '../../types/searchSuggestion';
import zod from 'zod';

const SearchResultSchema: zod.ZodType<SearchResult[]> = zod.array(zod.object({
    show: zod.object({
        id: zod.number(),
        name: zod.string(),
        genres: zod.array(zod.string()),
        image: zod.object({
            medium: zod.string()
        }).nullable()
    })
}))

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData()
    console.log('form data', formData);
    const query = formData.get('search')?.toString() || '';

    if (query) {
        console.log(query);
        const { data } = await axios.get<unknown>(`https://api.tvmaze.com/search/shows?q=${query}`);
        const res = SearchResultSchema.safeParse(data);

        if (!res.success) {
            console.log(JSON.stringify(res.error));
            throw new Error('Something went wrong');
        }
        
        return new Response(JSON.stringify(getMappedSearchSuggestions(res.data)), {
            headers: { 'Content-Type': 'application/json' },
        });
    }

    return new Response(JSON.stringify([]), {
        headers: { 'Content-Type': 'application/json' },
    });
};

const getMappedSearchSuggestions = (data: SearchResult[]): SearchSuggestion[] => {
    return data.map(({ show }) => ({
        name: show?.name,
        id: show?.id,
        image: show?.image?.medium,
        genres: show?.genres
    }));
};
