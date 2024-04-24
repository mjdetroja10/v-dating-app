import {
    CommonThreads,
    DiscoverComponent,
    EmailVerify,
    ForgotPassoword,
    Home,
    Login,
    MyConnections,
    MyProfile,
    ResetPassword,
    SignUp,
    Valadations,
} from 'Application/Components'
import {
    COMMON_THREADS_URL,
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
            {/*  public routes */}
            <Route path={HOME_URL} element={<Home />} />
            <Route path={FORGOT_PASSWORD_URL} element={<ForgotPassoword />} />
            <Route path={RESET_PASSWORD_URL} element={<ResetPassword />} />
            <Route path={EMAIL_VERIFY_URL} element={<EmailVerify />} />
            {/*  public routes */}

            {/* un protected routes */}
            <Route element={<UnAuthLayout />}>
                <Route path={SIGNUP_URL} element={<SignUp />} />
                <Route path={LOGIN_URL} element={<Login />} />
            </Route>
            {/* un protected routes */}

            {/* protected routes */}
            <Route element={<AuthLayout />}>
                <Route path={DISCOVER_URL} element={<DiscoverComponent />} />
                <Route path={MY_CONNECTION_URL} element={<MyConnections />} />
                <Route path={MY_PROFILE_URL} element={<MyProfile />} />
                <Route path={VALADATIONS_URL} element={<Valadations />} />
                <Route path={COMMON_THREADS_URL} element={<CommonThreads />} />
            </Route>
            {/* protected routes */}

            <Route path="*" element={'not found'} />
        </Routes>
    )
}
