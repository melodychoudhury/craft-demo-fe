"use client";
import { useQuery } from "@apollo/client/react";
import { GetBlogsDocument } from "@/src/gql/graphql";
import Link from "next/link";


export default function BlogPage() {
  const queryVariables = { section: ["blog"] };

  const { error, data } = useQuery(GetBlogsDocument, {
    variables: queryVariables,
  });

  if (error) {
    console.error(error);
    return <p>There was an error fetching the entries</p>;
  }

// define entries data
 const entries = data?.entries ?? [];

  return (
    <div>
      <h1>Blogs all page</h1>
        {entries.map((entry) => (
            <li key={entry.id}>
                <Link href={`/blogs/${entry.slug}`}>
                    <h2>{entry.title}</h2>
                </Link>
            </li>
        ))}
    </div>
  );
}