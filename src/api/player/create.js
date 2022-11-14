// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player.js";
import PlayerSkill from "../../db/model/playerSkill.js";

export default async (req, res, next) => {
  try {
    const { name, position, skills } = req.body;

    const createdPlayer = await Player.create({ name, position });
    skills.forEach(async (skill) => {
      await PlayerSkill.create({ skill, value: createdPlayer.id });
    });
    return await Player.findByPk(createdPlayer.id, {
      include: [PlayerSkill],
    });
  } catch (error) {
    next(error);
  }
};
