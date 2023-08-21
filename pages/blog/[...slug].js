import React from "react";
import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();
  console.log(router.query);
  return <h1>This is blog page</h1>;
}
