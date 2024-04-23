import { Login } from 'Application/Components/auth/Login/Login'
import { SignUp } from 'Application/Components/auth/SignUp/SignUp'
import { Home } from 'Application/Components/Home/Home'
import { AuthLayout } from 'Application/layouts/AuthLayout/AuthLayout'
import { UnAuthLayout } from 'Application/layouts/AuthLayout/UnAuthLayout'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* un protected routes */}
            <Route element={<UnAuthLayout />}>
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
            </Route>
            {/* un protected routes */}

            {/* protected routes */}
            <Route element={<AuthLayout />}>
                <Route path="/discover" element={<h2>discover page</h2>} />
                <Route path="/my-connections" element={<h2>my-connections page</h2>} />
                <Route path="/my-profile" element={<h2>my-profile page</h2>} />
                <Route path="/valadations" element={<h2>valadations page</h2>} />
            </Route>
            {/* protected routes */}

            <Route path="*" element={'not found'} />
        </Routes>
    )
}
