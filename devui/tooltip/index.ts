import type { App } from 'vue'
import Tooltip from './src/tooltip'

Tooltip.install = function(app: App) {
  app.component(Tooltip.name, Tooltip)
}

export { Tooltip }

export default {
  title: 'Tooltip tooltip提示',
  category: '反馈',
  install(app: App): void {
    app.use(Tooltip as any)
  }
}
