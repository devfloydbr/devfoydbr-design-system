import { themes } from '@storybook/theming'

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: '#120b09' },
    current: 'dark',
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}
