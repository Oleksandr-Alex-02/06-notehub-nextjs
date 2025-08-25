import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";
import { getdNotes } from "@/lib/api";
import Notes from "./Notes.client";

export default async function TasksPage() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["tasks", { search: "" }],
        queryFn: () => getdNotes(""),
    });

    return (
        <div>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Notes />
            </HydrationBoundary>
        </div>
    );
}