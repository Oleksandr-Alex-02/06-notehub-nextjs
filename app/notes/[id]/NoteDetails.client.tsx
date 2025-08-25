
import css from './NoteDetails.module.css';
import { Note } from "@/types/note"

interface NoteDetailsProps {
    note: Note;
}

export default function NoteDetails({ note }: NoteDetailsProps) {
    return (
        <div className={css.container}>
            <div className={css.item}>
                <div className={css.header}>
                    <h2>{note.title}</h2>
                </div>
                <p className={css.content}>{note.content}</p>
                <p className={css.date}>{note.createdAt}</p>
            </div>
        </div>

    );
}
