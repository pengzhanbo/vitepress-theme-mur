import type { EnhanceAppContext, Theme } from 'vitepress/client'
import defaultTheme from 'vitepress/theme'

const theme: Theme = Object.assign({}, defaultTheme, {
  enhanceApp(ctx: EnhanceAppContext) {
    defaultTheme.enhanceApp(ctx)
  },
} as Theme)

export default theme
