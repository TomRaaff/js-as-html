import { input } from './util/HTMLElements';
import { solveEquation } from './Calculator';

describe('Calculator', () => {
	describe('solve', () => {
		it('should evaluate the equation', () => {
			// arrange
			const equation = '4-(3+4)*4%5/2';
			const inputElement = input({value: equation}) as HTMLInputElement;
			const answer = '2.5';
			// act
			solveEquation(inputElement)
			// assert
			expect(inputElement.value).toBe(answer);
		});
		it('should evaluate without characters that are NOT numbers NOR . ( ) + - / * %', () => {
			// arrange
			const faultyEquation = '4-(3+4)[ !@#sdf,]*4%5/2';
			const inputElement = input({value: faultyEquation}) as HTMLInputElement;
			// act
			solveEquation(inputElement)
			// assert
			expect(inputElement.value).toBe('2.5');
		});
	});
});
