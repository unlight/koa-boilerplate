import { test } from 'ava';
import { pong } from './index';

debugger;

const next = () => { };
const k: any = {};

test('pong', async t => {
	await pong(k, next);
	t.is(k.body.result, 'Pong1');
});