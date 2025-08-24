
// import Link from 'next/link';
import { fetchNoteById } from '@/lib/api';
import css from './NoteDetails.module.css';

export default async function Page({ params }: { params: { id: string } }) {
    const note = await fetchNoteById(params.id);

    if (!note) {
        return <div className={css.notFound}>Нотатку не знайдено</div>;
    }

    return (
        <div className={css.container}>
            <div className={css.item}>
                <div className={css.header}>
                    <h2>{note.title}</h2>
                </div>
                <p className={css.content}>{note.content}</p>
                {/* <Link href="/Notes">Notes</Link> */}
                <p className={css.date}>{new Date(note.createdAt).toLocaleString()}</p>
            </div>
        </div>

    );
}
