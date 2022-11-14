// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player.js";
import PlayerSkill from "../../db/model/playerSkill.js";

export default async (req, res) => {
  try {
    const { name, position, skills } = req.body;
    const playerId = req.params.id;

 await Player.update({name, position}, {id:playerId});
    skills.forEach(async (skill) => {
      await PlayerSkill.update({ skill: skill.skill, value: skill.value }, {});
    });
  return res.send(200)
  } catch (error) {
    next(error);
  }
}
