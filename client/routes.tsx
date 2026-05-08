/* eslint-disable react/jsx-key */
import { createRoutesFromElements, Route } from 'react-router'

import App from './components/App'

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
  </>
)

export default routes