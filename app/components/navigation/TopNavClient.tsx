"use client";

import { useQuery } from "@apollo/client/react";
import { GetNavDocument } from "@/src/gql/graphql";
import TopNav from "./TopNav";
import MobileNav from "./MobileNav";

type TopNavClientProps = {
  debugKeepOpen?: boolean;
  defaultOpenItem?: string;
};

export default function TopNavClient({ debugKeepOpen = false, defaultOpenItem = "", }: TopNavClientProps) {

const queryVariables = { section: ["topNav"] };

const { error, data } = useQuery(GetNavDocument, {
    variables: queryVariables,
});

if (error) {
    console.error(error);
    return null; 
}

const items = data?.entries ?? [];

  return (
    <>
        <div className="hidden lg:block">
            <TopNav items={items} debugKeepOpen={debugKeepOpen} defaultOpenItem={defaultOpenItem} />
        </div>

        <div className="block lg:hidden">
            <MobileNav items={items} />
        </div>
    </>
  )
  
  
}