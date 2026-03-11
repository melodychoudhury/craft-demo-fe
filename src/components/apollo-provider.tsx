"use client";

import { ApolloProvider } from "@apollo/client/react";
import queryClient from "@/src/lib/query-client";

export default function ApolloAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={queryClient}>
      {children}
    </ApolloProvider>
  );
}