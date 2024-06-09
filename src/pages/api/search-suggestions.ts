import type { APIRoute } from 'astro';
import axios from 'axios';
import type { SearchResult } from '../../types/SearchResult';
import type { SearchSuggestion } from '../../types/searchSuggestion';

export const post: APIRoute = async ({ request }) => {
    const formData = await request.formData()
    console.log('form data', formData);
    const query = formData.get('search')?.toString() || '';

    if (query) {
        console.log(query);
        const { data } = await axios.get<SearchResult[]>(`https://api.tvmaze.com/search/shows?q=${query}`);
        return new Response(JSON.stringify(getMappedSearchSuggestions(data)), {
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
