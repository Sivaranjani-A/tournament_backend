import express from "express";
import {
  deleteParticipant,
  getUser,
  getUsers,
  insertParticipant,
  updateuserById,
} from "../services/participant.service.js";

const router = express.Router();

router.post("/create/:id", async function (request, response) {
  let { id } = request.params;
  const data = request.body;

  const result = await insertParticipant(id, data);
  response.send(result);
});

router.get("/getAll/:id", async function (request, response) {
  let { id } = request.params;
  const users = await getUsers(id);
  users
    ? response.send(users)
    : response.status(404).send({ msg: "users not found" });
});
router.delete("/:id", async function (request, response) {
  let { id } = request.params;
  const user = await deleteParticipant(id);
  user
    ? response.send(user)
    : response.status(404).send({ msg: "user not found" });
});
router.get("/:id", async function (request, response) {
  let { id } = request.params;
  const user = await getUser(id);
  user
    ? response.send(user)
    : response.status(404).send({ msg: "user not found" });
});
router.put("/:id", async function (request, response) {
  const { id } = request.params;
  let { name, email, contact } = request.body;

  const result = await updateuserById(id, name, email, contact);

  response.send(result);
});

export default router;
