const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
	'^.+\\.(ts|tsx)$': 'ts-jest',
	'^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
	'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  '\\.(jpg|jpeg|png|gif|webp|svg|jfif)$': '<rootDir>/__mocks__/fileMock.cjs'
  },
};

export default config;