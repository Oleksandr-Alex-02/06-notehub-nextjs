

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
