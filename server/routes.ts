'use strict';

import { app } from './index';
import * as path from 'path';

export default function routeHandler(myApp: typeof app) {
  myApp.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../top-kek-rpg-client/build/index.html'));
  });

  myApp.get('/test', (req, res) => {
    console.log('/test received');
    res.send('ok');
  });
}