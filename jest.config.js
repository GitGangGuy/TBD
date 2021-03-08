module.exports = {
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	roots: ['<rootDir>/src/', '<rootDir>/test/'],
	testRegex: '(/__tests__/.*|\\.(test|spec))\\.[tj]sx?$',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
};
