import type { EnhanceAppContext, Theme } from 'vitepress/client'
import defaultTheme from 'vitepress/theme'

export default Object.assign({}, defaultTheme, {
  enhanceApp(ctx: EnhanceAppContext) {
    defaultTheme.enhanceApp(ctx)
  },
} as Theme)
