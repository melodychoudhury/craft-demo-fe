"use client";

import { useQuery } from "@apollo/client/react";
import { GetHomeDocument } from "@/src/gql/graphql";
import PageBuilder from "./components/PageBuilder/PageBuilder";

export default function Home() {
  const { error, data } = useQuery(GetHomeDocument, {
    variables: { slug: "home" },
  });

  const blocks = data?.entry?.pagebuilder ?? [];

  if (error) {
    console.error(error);
    return <p>There was an error fetching the entries</p>;
  }
  const entry = data?.entry;

  if (!entry) return <p>No entry found</p>;

  return (
    <div>
        <p>{entry.body ? <h1>{entry.body}</h1> : null}</p>
        <PageBuilder blocks={blocks} />
    </div>
  );
}