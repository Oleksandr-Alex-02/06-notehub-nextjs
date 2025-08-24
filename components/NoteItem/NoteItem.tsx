
import Link from "next/link";
import { Note } from "@/types/note";
import css from "./NoteItem.module.css"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "@/lib/api";

type Props = {
    item: Note;
};

export default function NoteItem({ item }: Props) {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: () => deleteNote(item.id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notes"] });
        },
    });

    return (
        <li className={css.listItem} key={item.id}>
            <h2 className={css.title}>{item.title}</h2>
            <p className={css.content}>{item.content}</p>
            <div className={css.footer}>
                <span className={css.tag}>{item.tag}</span>
                {/* <button className={css.button}>Delete</button> */}
                <button
                    className={css.button}
                    onClick={() => mutation.mutate()}
                    disabled={mutation.isLoading}
                >
                    {mutation.isLoading ? "Deleting..." : "Delete"}
                </button>
            </div>
            <Link href={`/notes/${item.id}`}>{item.title}</Link>
        </li>
    )
}

