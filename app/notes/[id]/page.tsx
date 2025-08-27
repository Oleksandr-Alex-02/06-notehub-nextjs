
import { dehydrate, HydrationBoundary, QueryClient, } from "@tanstack/react-query"
import { getIdNotes } from "@/lib/api";

import NoteDetailsClient from "./NoteDetails.client"

type Props = {
    params: {
        id: string;
    };
};

export default async function NoteDetails({ params }: Props) {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["notes", params.id],
        queryFn: () => getIdNotes(params.id),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteDetailsClient />
        </HydrationBoundary>

    )
}