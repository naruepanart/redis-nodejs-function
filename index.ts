import * as redis from "./redis";

const first = async () => {
  const a = await redis.Delete("mykey");
  console.log(a);
};

first();
