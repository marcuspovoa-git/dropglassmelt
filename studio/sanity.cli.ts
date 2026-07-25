import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '645e5dvw',
    dataset: 'production'
  },
  deployment: {
    appId: 'puamonugebw0lf2k5oolro68',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
