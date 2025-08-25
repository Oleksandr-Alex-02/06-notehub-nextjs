
import { getIdNotes } from "@/lib/api";
import NoteDetails from "./NoteDetails.client"

type Props = {
    params: Promise<{ id: string }>
}

export default async function NoteDetalis({ params }: Props) {
    const { id } = await params;
    const res = await getIdNotes(id);

    return (
        <>
            <NoteDetails note={res} />
        </>
    )
}