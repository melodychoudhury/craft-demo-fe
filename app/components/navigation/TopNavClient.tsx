"use client";

import { useQuery } from "@apollo/client/react";
import { GetNavDocument } from "@/src/gql/graphql";
import TopNav from "./TopNav";

export default function TopNavClient() {

const queryVariables = { section: ["topNav"] };

const { error, data } = useQuery(GetNavDocument, {
    variables: queryVariables,
});

if (error) {
    console.error(error);
    return null; 
}

const items = data?.entries ?? [];

  return <TopNav items={items} />;
}