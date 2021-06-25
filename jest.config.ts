// jest.config.ts
import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  testEnvironment: 'jsdom',
  verbose: true,
}
export default config
