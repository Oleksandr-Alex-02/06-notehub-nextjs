
import { dehydrate, HydrationBoundary, QueryClient, } from "@tanstack/react-query"
import { fetchNotes } from "@/lib/api"

import Notes from "./Notes.client"

export default async function App() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["notes", "", 1],
        queryFn: () => fetchNotes(),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Notes />
        </HydrationBoundary>
    )
}