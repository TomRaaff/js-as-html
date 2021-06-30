import { describe, it, expect } from '@jest/globals';
import testContent from './TestContent';

describe('App', () => {
	it('should have a testContent function', () => {
		expect(typeof testContent).toBe('function');
	});
});
