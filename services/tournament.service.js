import { client } from "../index.js";
import { ObjectId } from "mongodb";

export async function insertTournament(data) {
  return await client
    .db("tournamentapp")
    .collection("tournaments")
    .insertOne(data);
}
export async function getEvents() {
  return await client
    .db("tournamentapp")
    .collection("tournaments")
    .find()
    .toArray();
}
export async function getEvent(id) {
  return await client
    .db("tournamentapp")
    .collection("tournaments")
    .findOne({ _id: ObjectId(id) });
}
export async function deleteTournament(id) {
  return await client
    .db("tournamentapp")
    .collection("tournaments")
    .deleteOne({ _id: ObjectId(id) });
}
export async function updateEventById(id, tournament_name, startDate, endDate) {
  return await client
    .db("tournamentapp")
    .collection("tournaments")
    .updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          tournament_name: tournament_name,
          startDate: startDate,
          endDate: endDate,
        },
      }
    );
}
