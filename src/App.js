import { EmailVerify } from 'Application/Components/auth/EmailVerify/EmailVerify'
import { ForgotPassoword } from 'Application/Components/auth/ForgotPassoword/ForgotPassoword'
import { Login } from 'Application/Components/auth/Login/Login'
import { ResetPassword } from 'Application/Components/auth/ResetPassword/ResetPassword'
import { SignUp } from 'Application/Components/auth/SignUp/SignUp'
import { Home } from 'Application/Components/Home/Home'
import {
    DISCOVER_URL,
    EMAIL_VERIFY_URL,
    FORGOT_PASSWORD_URL,
    HOME_URL,
    LOGIN_URL,
    MY_CONNECTION_URL,
    MY_PROFILE_URL,
    RESET_PASSWORD_URL,
    SIGNUP_URL,
    VALADATIONS_URL,
} from 'Application/Constants/RouteConstant'
import { AuthLayout } from 'Application/layouts/AuthLayout/AuthLayout'
import { UnAuthLayout } from 'Application/layouts/AuthLayout/UnAuthLayout'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
    return (
        <Routes>
            <Route path={HOME_URL} element={<Home />} />
            <Route path={FORGOT_PASSWORD_URL} element={<ForgotPassoword />} />
            <Route path={RESET_PASSWORD_URL} element={<ResetPassword />} />
            <Route path={EMAIL_VERIFY_URL} element={<EmailVerify />} />

            {/* un protected routes */}
            <Route element={<UnAuthLayout />}>
                <Route path={SIGNUP_URL} element={<SignUp />} />
                <Route path={LOGIN_URL} element={<Login />} />
            </Route>
            {/* un protected routes */}

            {/* protected routes */}
            <Route element={<AuthLayout />}>
                <Route path={DISCOVER_URL} element={<h2>discover page</h2>} />
                <Route path={MY_CONNECTION_URL} element={<h2>my-connections page</h2>} />
                <Route path={MY_PROFILE_URL} element={<h2>my-profile page</h2>} />
                <Route path={VALADATIONS_URL} element={<h2>valadations page</h2>} />
            </Route>
            {/* protected routes */}

            <Route path="*" element={'not found'} />
        </Routes>
    )
}
