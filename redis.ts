import Redis from "ioredis";
export const client = new Redis({
  port: 6379, // Redis port
  host: "127.0.0.1", // Redis host
  username: "default", // needs Redis >= 6
  password: "password123",
  db: 0, // Defaults to 0
});
export const Get = (key: string) => {
  return client.get(key);
};
export const Set = (key: string, value: string) => {
  return client.set(key, value);
};
export const SetExpire = (key: string, value: string, time: number) => {
  return client.set(key, value, "EX", time);
};
export const Delete = (key: string) => {
  return client.del(key);
};
export const Incr = (key: string) => {
  return client.incr(key);
};
export const Decr = (key: string) => {
  return client.decr(key);
};
export const IncrBy = (key: string, increment: number | string) => {
  return client.incrby(key, increment);
};
export const DecrBy = (key: string, decrement: string | number) => {
  return client.decrby(key, decrement);
};
