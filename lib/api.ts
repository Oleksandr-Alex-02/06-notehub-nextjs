
import axios from 'axios';
import { Note, } from "@/types/note";

export interface NoteData {
    notes: Note[];
    totalPages: number;
}

const NOTEHUB_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.baseURL = "https://notehub-public.goit.study/api";

//currentPage: number, searchQuery: string

export const fetchNotes = async () => {
    const res = await axios.get<Note[]>(
        "/notes", {
        params: {
            // search: searchQuery,
            // page: currentPage,
        },
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${NOTEHUB_TOKEN}`,
        }
    }
    );
    return res.data;
};

export const getIdNotes = async (id: string) => {
    const res = await axios.get<Note>(
        `/notes/${id}`, {

        headers: {
            accept: "application/json",
            Authorization: `Bearer ${NOTEHUB_TOKEN}`,
        }
    }
    );
    return res.data;
};