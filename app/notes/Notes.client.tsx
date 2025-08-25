'use client';

// 'use client';

// import { dir } from "console";

// import css from './page.module.css'
// import { useState } from 'react'
// import { useQuery, keepPreviousData } from "@tanstack/react-query";
// import { NoteData } from '@/lib/api';
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

// export default function Note() {
//     return (
//         <div>
//             <h1>
//                 Notes
//             </h1>
//         </div>
//     )
// }

import { useDebounce, useDebouncedCallback } from "use-debounce"
import { useState } from "react"
import { fetchNotes } from "@/lib/api"
import css from "./page.module.css"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

export default function Notes() {
    const [inputValue, setInputValue] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const debouncedSetSearchQuery = useDebouncedCallback((value: string) => {
        setSearchQuery(value);
        setCurrentPage(1);
    }, 300);

    const { data } = useQuery({
        queryKey: ["notes", currentPage, searchQuery],
        queryFn: () => fetchNotes(),
        placeholderData: keepPreviousData,
    })

    // const totalPages = data?.totalPages || 0;


    console.log(data);
    return (
        <div className={css.app}>

        </div>
    )
}