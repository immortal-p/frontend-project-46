lint:
	npx eslint src/gendiff.js

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest