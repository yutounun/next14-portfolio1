import React from "react";
import { db } from "@/db/index";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions";

type SnippetShowPageProps = {
  params: {
    id: string;
  };
};
async function SnippetShowPage({ params: { id } }: SnippetShowPageProps) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const snippet = await db.snippet.findFirst({
    where: {
      id: Number(id),
    },
  });
  if (!snippet) {
    notFound();
  }

  // actions.deleteSnippetの既にIDが引数にセットされているバージョンをコピペ
  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link href={`/snippets/${id}/edit`} className="p-2 border rounded">
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export default SnippetShowPage;
