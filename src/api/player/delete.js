// ---------------------------------------------------------------------------------------------
// YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// ---------------------------------------------------------------------------------------------

import Player from "../../db/model/player.js";

export default async (req, res, next) => {
  
  try {
    const {id} = req.params
    deletedPlayer = await Player.destroy({id})
    return await Player.find();
  } catch (error) {
    next(error)
  }
  res.sendStatus(500);
}
