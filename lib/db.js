import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connet(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.xp3cg.mongodb.net/auth-demo?retryWrites=true&w=majority`
  );

  return client;
}
