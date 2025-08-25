
import Link from "next/link";
import { fetchNotes } from "@/lib/api"


export default async function Notes() {
    const note = await fetchNotes();

    return (
        <div>
            <h1>Notes</h1>

            <Link href={`/`}>rfdwefrgt</Link>

        </div>
    )
}