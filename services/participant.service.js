import { ObjectId } from "mongodb";
import { client } from "../index.js";
export async function insertParticipant(id, data) {
  return await client
    .db("tournamentapp")
    .collection("participants")
    .insertOne({ tournamentid: id, ...data });
}
export async function getUsers(id) {
  return await client
    .db("tournamentapp")
    .collection("participants")
    .find({ tournamentid: id })
    .toArray();
}
export async function deleteParticipant(id) {
  return await client
    .db("tournamentapp")
    .collection("participants")
    .deleteOne({ _id: ObjectId(id) });
}
export async function getUser(id) {
  return await client
    .db("tournamentapp")
    .collection("participants")
    .findOne({ _id: ObjectId(id) });
}
export async function updateuserById(id, name, email, contact) {
  return await client
    .db("tournamentapp")
    .collection("participants")
    .updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name: name,
          email: email,
          contact: contact,
        },
      }
    );
}
