const db = require("./dbConfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

async function find() {
  return await db.table("Schemes").select("*");
}
async function findById(id) {
  return await db
    .table("Schemes")
    .select("*")
    .where({ id });
}
async function findSteps(id) {
  return await db
    .select("sch.id", "sch.scheme_name", "ste.step_number", "ste.instructions")
    .table("Schemes AS sch")
    .join("Steps AS ste", "sch.id", "=", "ste.scheme_id")
    .where("sch.id", "=", id)
    .orderBy("ste.step_number", "asec");
}
async function add(scheme) {
  const [id] = await db.table("Schemes").insert(scheme);
  return findById(id);
}
async function update(changes, id) {
  await db
    .table("Schemes")
    .update(changes, "*")
    .where({ id });
  return findById(id);
}
async function remove(id) {
  return await db
    .table("Schemes")
    .del()
    .where({ id });
}
