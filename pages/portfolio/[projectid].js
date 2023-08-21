import React from "react";
import { useRouter } from "next/router";

const PortFolioProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The portfolio project page us page</h1>
    </div>
  );
};

export default PortFolioProjectPage;
