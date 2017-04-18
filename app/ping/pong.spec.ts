import { pong } from './index';

import assert = require('assert');

const next = () => { };
const k: any = {};

describe('Ping', () => {

    it('pong', async () => {
        await pong(k, next);
        assert.equal(k.body.result, 'Pong');
    });

});
