import { render, screen } from '@testing-library/react'

import App from './App'
import i18n from './i18n'

test('renders a real adoption route disabled support action', async () => {
  window.history.pushState({}, '', '/become-pet-parent')
  await i18n.changeLanguage('en')

  render(<App />)

  expect(screen.getByRole('button', { name: /support/i })).toBeDisabled()
})
