"use client";

import { useQuery } from "@apollo/client/react";
import { GetNavDocument } from "@/src/gql/graphql";
import TopNav from "./TopNav";
import MobileNav from "./MobileNav";

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

console.log("mapped items", items)

  return (
    <>
        <div className="hidden lg:block">
            <TopNav items={items} />
        </div>

        <div className="block lg:hidden">
            <MobileNav items={items} />
        </div>
    </>
  )
  
  
}