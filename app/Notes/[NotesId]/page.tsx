

import { getNoteId } from "@/lib/api";

type Props = {
    params: Promise<{ Id: string }>;
};

export default async function TaskDetailsPage({ params }: Props) {
    const { Id } = await params;
    const note = await getNoteId(Id);

    return (
        <div>
            <h1>TaskDetailsPage {Id}</h1>
            {note.title}
        </div>
    );
}


// type Props = {
//     params: Promise<{ id: string }>;
// };

// const NoteDetails = async ({ params }: Props) => {
//     const { id } = await params;
//     const note = await getSingleNote(id);

//     const formattedDate = note.updatedAt
//         ? `Updated at: ${note.updatedAt}`
//         : `Created at: ${note.createdAt}`;

//     return (
//         <div>
//             <h2>{note.title}</h2>
//             <p>{note.content}</p>
//             <button>Edit</button>
//             <p>{formattedDate}</p>
//         </div>
//     );
// };

// export default NoteDetails;
