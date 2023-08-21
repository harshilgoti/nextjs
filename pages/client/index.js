import Link from "next/link";
import { useRouter } from "next/router";

const ClientPage = () => {
  const router = useRouter();
  const clients = [
    { id: "max", name: "maximilian" },
    { id: "manu", name: "manual" },
  ];

  const handleClick = () => {
    router.push("client/max/projecta");
  };
  return (
    <div>
      <h1>The client page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`client/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}

        {/* Other way for navigation */}

        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: "client/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default ClientPage;
