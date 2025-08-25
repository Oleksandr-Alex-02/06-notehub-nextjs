
"use client";

import { deleteNote, getdNotes } from "@/lib/api";
import { Note } from "@/types/note";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

// localhost:3000/tasks
// Next server виконує компонент TasksPage
// Виконується запит з queryClient.prefetchQuery
// Результат запиту зберігається у кеші queryClient
// Виконується компонент Tasks
// Отримує дані від queryClient
// В браузер відправляється сторінка
// В браузері ініціалізується useQuery
// useQuery вже використовує кеш queryClient ["tasks"]
// refetchOnMount: false щоб не робити зайвий запит тому що
// ці дані вже є в кеші queryClient ["tasks"]

export default function Notes() {
    const queryClient = useQueryClient();
    const [searchQuery, setSearchQuery] = useState("");

    const { data } = useQuery<Note[]>({
        queryKey: ["notes", { search: searchQuery }],
        queryFn: () => getdNotes(searchQuery),
        refetchOnMount: false,
    });

    const mutation = useMutation({
        mutationFn: deleteNote,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notes"] }),
    });

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            {data?.map((note) => (
                <div key={note.id}>
                    {note.title} <Link href={`/notes/${note.id}`}>Details</Link>
                    <button onClick={() => mutation.mutate(note.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}


// 'use client';

// import css from './page.module.css'
// import { useState } from 'react'
// import { useQuery, keepPreviousData } from "@tanstack/react-query";
// import { getNotes, NoteData } from '@/lib/api';
// import { useDebouncedCallback } from "use-debounce";

// import SearchBox from '@/components/SearchBox/SearchBox'
// import Pagination from '@/components/Pagination/Pagination'
// import NoteList from "@/components/NoteList/NoteList"
// import NoteForm from '@/components/NoteForm/NoteForm';
// import Modal from '@/components/Modal/Modal'

// export default function Notes() {
//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false)

//     const [inputValue, setInputValue] = useState<string>("");
//     const [searchQuery, setSearchQuery] = useState<string>("");
//     const [currentPage, setCurrentPage] = useState<number>(1);
//     const debouncedSetSearchQuery = useDebouncedCallback((value: string) => {
//         setSearchQuery(value);
//         setCurrentPage(1);
//     }, 300);

//     const { data } = useQuery<NoteData>({
//         queryKey: ["notes", currentPage, searchQuery],
//         queryFn: () => getNotes(currentPage, searchQuery),
//         placeholderData: keepPreviousData,
//     })

//     const totalPages = data?.totalPages || 0;

//     return (
//         <>
//             <div className={css.app}>
//                 <header className={css.toolbar}>
//                     <SearchBox text={inputValue}
//                         onChange={(value: string) => {
//                             setInputValue(value);
//                             debouncedSetSearchQuery(value);
//                         }}
//                     />
//                     {totalPages > 1 &&
//                         <Pagination
//                             totalPages={totalPages}
//                             currentPage={currentPage}
//                             onPageChange={setCurrentPage}
//                         />
//                     }
//                     <button className={css.button} onClick={openModal}>Create note +</button>
//                 </header>
//                 {data && data.notes.length > 0 && <NoteList notes={data.notes} />}
//                 {isModalOpen && (
//                     < Modal onClose={closeModal}>
//                         <NoteForm onSuccess={closeModal} />
//                     </Modal>
//                 )}
//             </div >
//         </>
//     )
// }