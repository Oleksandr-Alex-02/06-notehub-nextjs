
import { dehydrate, HydrationBoundary, QueryClient, } from "@tanstack/react-query"
import { getIdNotes } from "@/lib/api";

import NoteDetailsClient from "./NoteDetails.client"

type NoteDeteilsProps = {
    params: Promise<{ id: string }>
};

export default async function NoteDetails({ params }: NoteDeteilsProps) {
    const queryClient = new QueryClient()
    const { id } = await params

    await queryClient.prefetchQuery({
        queryKey: ["notes", id],
        queryFn: () => getIdNotes(id),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteDetailsClient />
        </HydrationBoundary>

    )
}