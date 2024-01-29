import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://kartikmahajan5688:MkRNfX4SWy2N7ayy@cluster0.6oakhcl.mongodb.net/nextjsAuth?retryWrites=true&w=majority"
  );

  return client;
}
