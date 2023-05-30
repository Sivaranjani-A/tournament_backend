import express from "express";

import {
  deleteTournament,
  getEvent,
  getEvents,
  insertTournament,
  updateEventById,
} from "../services/tournament.service.js";
const router = express.Router();

router.post("/create", async function (request, response) {
  let { startDate, endDate } = request.body;
  startDate = startDate.split("T");
  startDate = startDate[0];
  request.body.startDate = startDate;
  endDate = endDate.split("T");
  endDate = endDate[0];
  request.body.endDate = endDate;
  const data = request.body;

  const result = await insertTournament(data);
  response.send(result);
});
router.get("/getAll", async function (request, response) {
  const event = await getEvents();
  event
    ? response.send(event)
    : response.status(404).send({ msg: "event not found" });
});
router.delete("/:id", async function (request, response) {
  let { id } = request.params;
  const event = await deleteTournament(id);
  event
    ? response.send(event)
    : response.status(404).send({ msg: "event not found" });
});
router.get("/:id", async function (request, response) {
  let { id } = request.params;
  const event = await getEvent(id);
  event
    ? response.send(event)
    : response.status(404).send({ msg: "event not found" });
});
router.put("/:id", async function (request, response) {
  const { id } = request.params;
  let { tournament_name, startDate, endDate } = request.body;

  startDate = startDate.split("T");
  startDate = startDate[0];
  request.body.startDate = startDate;
  endDate = endDate.split("T");
  endDate = endDate[0];
  request.body.endDate = endDate;

  const result = await updateEventById(id, tournament_name, startDate, endDate);

  response.send(result);
});
export default router;
