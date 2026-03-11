// needs to run is browser so it will allow me to use usequery
"use client";

// apollos react hook to run the gql queries
import { useQuery } from "@apollo/client/react";
//imports compiled gql
import { GetPageDocument } from "@/src/gql/graphql";
// imports page builder components
import PageBuilder from "@/app/components/PageBuilder/PageBuilder";

//recieves the string prop from page.js e.g. about
export default function PageClient({ uriString }) {
  // runs getPage query
  const { error, data } = useQuery(GetPageDocument, {
    // pass it the string e.g. about
    variables: { uri: [uriString] }, // ✅ THIS is what selects the page
  });

  if (error) {
    console.error(error);
    return <p>There was an error fetching the page</p>;
  }

  //safley render the data once it exists
  const entry = data?.entry;
  //if it doesnt render return no entry found
  if (!entry) return <p>No entry found</p>;

  const blocks = entry.pagebuilder ?? [];

  return (
    <div>
      <h2>{entry.title}</h2>
      <p>{entry.body}</p>
      <PageBuilder blocks={blocks} />
    </div>
  );
}