"use client";

import { useQuery } from "@apollo/client/react";
import { GetHomeDocument } from "@/src/gql/graphql";
import PageBuilder from "@/app/components/PageBuilder/PageBuilder";

export default function Home() {
  const { loading, error, data } = useQuery(GetHomeDocument);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const entry = data?.entry;
  const blocks = entry?.pagebuilder ?? [];

  return (
    <div>
      <PageBuilder blocks={blocks} />
    </div>
  );
}