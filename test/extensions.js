'use strict';

const { assert } = require('chai');
const manifest = require('../package.json');

suite('Included Extensions Tests', () => {
    const extensions = manifest.extensionPack;

    test('Should have the correct number of extensions', () => {
        assert.deepEqual(extensions.length, 4);
    });

    test('Should include Python extension', () => {
        assert.isTrue(extensions.includes('ms-python.python'));
    });

    test('Should include IntelliCode extension', () => {
        assert.isTrue(extensions.includes('VisualStudioExptTeam.vscodeintellicode'));
    });

    test('Should include Python Test Adapter extension', () => {
        assert.isTrue(extensions.includes('LittleFoxTeam.vscode-python-test-adapter'));
    });

    test('Should include Test Explorer extension', () => {
        assert.isTrue(extensions.includes('hbenl.vscode-test-explorer'));
    });
});
