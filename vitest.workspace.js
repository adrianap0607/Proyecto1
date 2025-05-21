import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineWorkspace } from 'vitest/config'
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineWorkspace([
  'vite.config.js',
  {
    extends: 'vite.config.js',
    plugins: [
      storybookTest({ configDir: path.join(__dirname, '.storybook') })
    ],
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        headless: true,
        name: 'chromium',
        provider: 'playwright'
      },
      setupFiles: ['.storybook/vitest.setup.js']
    }
  }
])