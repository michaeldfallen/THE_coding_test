import { server } from "./apollo";

server.listen().then(({ url }) => {
  console.log(`Listening at ${url}`);
});
