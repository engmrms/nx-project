import { Hero, Test } from '@nx-project/ui/components'
import { THEME } from '@nx-project/ui/models/enums'
import { useThemeStore } from '@nx-project/ui/store'
import { Button } from 'mada-design-system'
import { Link, Route, Routes } from 'react-router-dom'
import NxWelcome from './nx-welcome'

export function App() {
    const { theme, setTheme } = useThemeStore()

    const handleClick = () => {
        setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)

        if (theme === THEME.LIGHT) {
            document.body.classList.remove('dark')
        } else {
            document.body.classList.add('dark')
        }
    }

    return (
        <div>
            <Button onClick={handleClick}>{theme === THEME.LIGHT ? 'Dark Mode' : 'Light Mode'}</Button>
            <Hero title="Welcome to the Admin" subtitle="This is the admin dashboard" cta="Click me" />
            <Test />
            <Button variant="default" colors={'neutral'} size={'sm'}>
                Click me
            </Button>
            <NxWelcome title="@nx-project/admin" />

            {/* START: routes */}
            {/* These routes and navigation have been generated for you */}
            {/* Feel free to move and update them to fit your needs */}
            <br />
            <hr />
            <br />
            <div role="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/page-2">Page 2</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            This is the generated root route. <Link to="/page-2">Click here for page 2.</Link>
                        </div>
                    }
                />
                <Route
                    path="/page-2"
                    element={
                        <div>
                            <Link to="/">Click here to go back to root page.</Link>
                        </div>
                    }
                />
            </Routes>
            {/* END: routes */}
        </div>
    )
}

export default App
