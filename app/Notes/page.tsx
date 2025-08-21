
import { fetchNotes } from "@/lib/api";
import Link from "next/link";
import css from "./Notes.module.css";

export default async function NotesPage() {
    const notes = await fetchNotes();

    return (
        <div>
            <h1>Notes page</h1>
            <ul className={css.list}>
                {notes.map((note) => (
                    <li className={css.listItem} key={note.id}>
                        <h2 className={css.title}>{note.title}</h2>
                        <p className={css.content}>{note.content}</p>
                        <div className={css.footer}>
                            <span className={css.tag}>{note.tag}</span>
                            <button className={css.button}>Delete</button>
                        </div>
                        {/* <Link href={`/notes/${note.id}`}>{note.title}</Link> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}