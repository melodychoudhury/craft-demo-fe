"use client";

import { useQuery } from "@apollo/client/react";
import { GetBlogsDocument } from "@/src/gql/graphql";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
    const { slug } = useParams();
    
  const { error, data } = useQuery(GetBlogsDocument, {
        variables: { slug: [slug] },
        skip: !slug,
    });

    if (error) return <p>Error loading post</p>;

    const post = data?.entries?.[0];
    if (!post) return <p>Not found</p>;

    console.log(data);


  return (
    <div>
      Blog child page
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}