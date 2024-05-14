import { About } from '../components/About.js'
import { Home } from '../components/Home.js'
import { RecipeList } from '../components/RecipeList.js'

export const routes = [
    {'path': '/about', 'component': About },
    {'path': '/home', 'component': Home},
    {'path': '/recipes', 'component': RecipeList },
]