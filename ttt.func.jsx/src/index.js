import './index.css';
import create_store from './store'
import create_render from './View';
import model from './model'

const store = create_store(model())
const dispatch = action => store.onAction(action)
const render = create_render(dispatch)
store.render = render

render(model())
