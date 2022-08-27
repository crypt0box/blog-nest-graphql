import { initUrqlClient } from "next-urql";
import { Client } from "urql";

const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
console.log(
  "🚀 ~ file: gql-requests.ts ~ line 5 ~ GRAPHQL_ENDPOINT",
  GRAPHQL_ENDPOINT
);

export function urqlClient(): Promise<Client> {
  return new Promise((resolve, reject) => {
    const client = initUrqlClient(
      {
        url: GRAPHQL_ENDPOINT || "",
      },
      false
    );
    if (!client) {
      reject(Error("Failed to init initUrqlClient."));
    } else {
      resolve(client);
    }
  });
}
