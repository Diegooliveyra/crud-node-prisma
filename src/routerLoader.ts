import path from 'path'
import fs from 'fs'

export const routerLoader = (app) => {
  const modulesPath = path.join(__dirname, 'modules')

  fs.readdirSync(modulesPath).forEach(async (dir) => {
    const modulePath = path.join(modulesPath, dir)

    if (fs.statSync(modulesPath).isDirectory()) {
      const controllerPath = path.join(modulePath, `${dir}.controller.ts`)
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
