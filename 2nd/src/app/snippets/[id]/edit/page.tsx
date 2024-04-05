import React from "react";
import { db } from "@/db/index";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippetEditForm";

type SnippetEditPageProps = {
  params: {
    id: string;
  };
};
async function SnippetEditPage(props: SnippetEditPageProps) {
  const id = Number(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });
  if (!snippet) {
    notFound();
  }
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}

export default SnippetEditPage;
