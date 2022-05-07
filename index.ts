import { ServerResponse } from "http";

const polka = require("polka");

const api = polka();
api.get("/", (req: Request, res: ServerResponse) => {
  console.log(`User hit`);
  res.end(`Hello World`);
});
api.listen(3000, (err: Error) => {
  if (err) throw err;
  console.log(`> Running on localhost:3000`);
});
