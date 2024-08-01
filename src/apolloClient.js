import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client/core";

const httpLink = new HttpLink({
  uri: "https://sirefcode.hasura.app/v1/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "x-hasura-admin-secret":
        "jw8y3lwW7Vk4HKuROjlbs3flnrYaDsE1vkqNqhtTgv3rIo8bC655Fx6WmSZk4KvO",
    },
  });
  return forward(operation);
});

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
