
import axios from 'axios';
import { Note, NoteFormType } from "@/types/note";

export interface NoteData {
    notes: Note[];
    totalPages: number;
}

const NOTEHUB_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.baseURL = "https://notehub-public.goit.study/api";


export const getdNotes = async (): Promise<NoteData> => {
    const res = await axios.get<NoteData>(
        "/notes", {
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${NOTEHUB_TOKEN}`,
        }
    }
    );
    return res.data;
};

export const getNoteId = async (id: string) => {
    const res = await axios.get<Note>(`/notes/${id}`,
        {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${NOTEHUB_TOKEN}`,
            }
        }
    );
    return res.data;
};


export const getNotes = async (page: number = 1, query: string = ""): Promise<NoteData> => {
    const res = await axios.get<NoteData>(
        "/notes", {
        params: {
            page,
            search: query,
        },
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${NOTEHUB_TOKEN}`,
        }
    }
    );
    return res.data;
};

export const deleteNote = async (noteId: string) => {
    const res = await axios.delete<Note>(
        `/notes/${noteId}`, {
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${NOTEHUB_TOKEN}`,
        }
    }
    );
    return res.data;
}

export const createNote = async (noteData: NoteFormType) => {
    const res = await axios.post<Note>(
        "/notes", noteData, {
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${NOTEHUB_TOKEN}`,
        }
    }
    );
    return res.data;
}

// interface NoteUpdate {
//     id: string;
//     title: string,
//     content: string,
//     tag: string,
// }

// export const patchNote = async (noteUpdate: NoteUpdate) => {
//     const res = await axios.patch<NoteData>(
//         `/notes/${noteUpdate.id}`, {
//         params: {
//             title: noteUpdate.title,
//             content: noteUpdate.content,
//             tag: noteUpdate.tag,
//         },
//         headers: {
//             accept: "application/json",
//             Authorization: `Bearer ${NOTEHUB_TOKEN}`,
//         }
//     });
//     return res.data;
// }