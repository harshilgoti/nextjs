import { useRouter } from "next/router";

const ClientSelectedProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>The client project page for selected project</h1>
    </div>
  );
};

export default ClientSelectedProjectPage;
