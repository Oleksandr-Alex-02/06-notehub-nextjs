
import { dehydrate, HydrationBoundary, QueryClient, } from "@tanstack/react-query"
import { getIdNotes } from "@/lib/api";

import NoteDetails from "./NoteDetails.client"

export default async function NoteDetalis() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["notes"],
        queryFn: () => getIdNotes("1"),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteDetails />
        </HydrationBoundary>

    )
}