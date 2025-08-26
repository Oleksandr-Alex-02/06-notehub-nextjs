'use client';

import css from './NoteDetails.module.css';

import { useParams } from "next/navigation"
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getIdNotes } from '@/lib/api';
import { Note } from "@/types/note"

export default function NoteDetails() {
    const { id } = useParams<{ id: string }>()

    const { data } = useQuery<Note>({
        queryKey: ["notes", id],
        queryFn: () => getIdNotes(id),
        placeholderData: keepPreviousData,
    })

    return (
        <div className={css.container}>
            <div className={css.item}>
                <div className={css.header}>
                    <h2>{data?.title}</h2>
                </div>
                <p className={css.content}>{data?.content}</p>
                {data?.createdAt && (
                    <p className={css.date}>
                        {new Date(data.createdAt).toLocaleString('uk-UA')}
                    </p>
                )}
            </div>
        </div>

    );
}
