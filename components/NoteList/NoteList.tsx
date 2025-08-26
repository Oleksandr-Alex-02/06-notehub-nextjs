'use client';

import Link from "next/link";
import css from "./NoteList.module.css";

import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDebouncedCallback } from "use-debounce";

import { fetchNotes, deleteNote } from "@/lib/api";
import { Note } from "@/types/note";


type Props = {
    notes: Note[];
    // id: Note['id'];
};

export default function NoteList({ notes }: Props) {
    const queryClient = useQueryClient();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const debouncedSetSearchQuery = useDebouncedCallback((value: string) => {
        setSearchQuery(value);
        setCurrentPage(1);
    }, 300);

    const { data } = useQuery({
        queryKey: ["notes", { search: searchQuery }],
        queryFn: () => fetchNotes(currentPage, searchQuery),
        refetchOnMount: false,
    });

    const mutation = useMutation({
        mutationFn: deleteNote,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notes"] }),
    });

    return (
        <ul className={css.list}>
            {notes.map((note) => (
                <li className={css.listItem} key={note.id}>
                    <h2 className={css.title}>{note.title}</h2>
                    <p className={css.content}>{note.content}</p>
                    <div className={css.footer}>
                        <span className={css.tag}>{note.tag}</span>
                        <Link href={`/notes/${note.id}`}>View details</Link>
                        <button className={css.button} onClick={() => mutation.mutate(note.id)} >Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}

