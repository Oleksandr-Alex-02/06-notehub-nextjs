
import { getNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

export default async function NotesPage() {
    const response = await getNotes();

    return (
        <div>
            <h1>Notes page</h1>
            {response?.length > 0 && <NoteList notes={response} />}
        </div>
    );
}

//Директива 'use client'