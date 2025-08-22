import { Note } from "@/types/note";
import css from "./NoteItem.module.css"

type Props = {
    item: Note;
};

export default function NoteItem({ item }: Props) {
    return (
        <li className={css.listItem} key={item.id}>
            <h2 className={css.title}>{item.title}</h2>
            <p className={css.content}>{item.content}</p>
            <div className={css.footer}>
                <span className={css.tag}>{item.tag}</span>
                <button className={css.button}>Delete</button>
            </div>
            {/* <Link href={`/notes/${note.id}`}>{note.title}</Link> */}
        </li>
    )
}

