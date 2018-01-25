'use strict';
/****************************** INIT DEPENDENCIES ******************************/
// npm dependencies
import * as express from 'express';
import * as bodyparser from 'body-parser';
import routeHandler from './routes';

// init server application using express
export const app = express();

/***************************** INIT CUSTOM MODULES *****************************/

/******************************* INIT MIDDLEWARE *******************************/
// Should allow us to use the assets inside the public folder in the client side codes
app.use(express.static(__dirname + '/../top-kek-rpg-client/build/'));

app.use(bodyparser.json());

/********************************* INIT SERVER *********************************/
routeHandler(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port', port);
});