// ---------------------------------------------------------------------------------------------
// YOU CAN MODIFY THE CODE BELOW IN ORDER TO COMPLETE THE TASK
// YOU SHOULD NOT CHANGE THE EXPORTED VALUE OF THIS FILE
// ---------------------------------------------------------------------------------------------

import updatePlayerController from "./update.js"
import createPlayerController from "./create.js"
// import deletePlayerController from "./delete.js"
import getList from "./getList.js";
export default (app) => {
  app.put(`/player/:id`,updatePlayerController);
  // app.delete( `/player/:id`, deletePlayerController);
  app.get('/player',getList)
  app.post(`/player`,createPlayerController);
  app.delete(
    `/player/:id`,
    require('./delete').default
  );

};