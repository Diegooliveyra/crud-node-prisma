import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)

export const routerLoader = (app) => {
  const modulesPath = path.join(__dirName, 'modules')

  fs.readdirSync(modulesPath).forEach(async (dir) => {
    const modulePath = path.join(modulesPath, dir)

    if (fs.statSync(modulesPath).isDirectory()) {
      const controllerPath = path.join(modulePath, `${dir}.controller.js`)
      if (fs.existsSync(controllerPath)) {
        // eslint-disable-next-line node/no-unsupported-features/es-syntax
        const controller = await import(controllerPath)
        if (controller.default && typeof controller.default === 'function') {
          app.use(controller.default)
        }
      }
    }
  })
}
