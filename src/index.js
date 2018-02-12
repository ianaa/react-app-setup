import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import './styles_global/styles.css'
import App from './components/App'

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

if (module.hot) module.hot.accept()