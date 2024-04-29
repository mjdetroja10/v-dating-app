import { userHeaderMenu } from 'Application/Constants/HeaderConstant'
import { SIDEBAR_MENU } from 'Application/Constants/SidebarConstant'
import { useFetchData } from 'Application/Hooks/useFetchData'
import { AppLayout } from 'Application/layouts/AppLayout'
import { AlertComponent } from 'Application/Molecules/Atoms/AlertComponent/AlertComponent'
import { GetDiscoverListRequest } from 'Infrasctructure/store/requests/GetDiscoverListRequest'
import { useEffect, useRef, useState } from 'react'
import { Pagination } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'

import { Box, CircularProgress, Grid, useMediaQuery } from '@mui/material'

import { UserPreview } from '../UserPreview/UserPreview'
import { StyledSwiper, Wrapper } from './DiscoverComponent.styled'
import { UserProfileCard } from './UserProfileCard/UserProfileCard'

import 'swiper/css/pagination'

const PAGE_LIMIT = 20

const onScroll = (listInnerRef, setPage) => () => {
    if (listInnerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
        if (scrollTop + clientHeight === scrollHeight) {
            setPage((page) => page + 1)
        }
    }
}

const onSlideChange = (page, setPage) => (swiper) => {
    if ((PAGE_LIMIT - 2) * page === swiper?.activeIndex - 1) setPage((page) => page + 1)
}

const onSuccess = (page, setDiscoverList, setActive) => (data) => {
    if (data) {
        if (data.length === 0) {
            setActive(true)
            return
        }

        setDiscoverList(page === 1 ? data : (prev) => prev.concat(data))
        if (data.length < PAGE_LIMIT) setActive(true)
    }
}

export const DiscoverComponent = () => {
    const [page, setPage] = useState(1)
    const [active, setActive] = useState(false)
    const [discoverList, setDiscoverList] = useState([])
    const [activeProfile, setActiveProfile] = useState('')
    const [response, setResponse] = useState({ success: '', error: '' })

    const listInnerRef = useRef()

    const tabDevices = useMediaQuery((theme) => theme.breakpoints.down('md'))

    const [getDiscoverData, loading] = useFetchData({
        request: GetDiscoverListRequest,
        onSuccess: onSuccess(page, setDiscoverList, setActive),
        onError: () => {},
    })

    useEffect(() => {
        if (!active) getDiscoverData({ page, pageSize: PAGE_LIMIT })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active, page])

    return (
        <AppLayout headerMenu={userHeaderMenu} sidebarMenu={SIDEBAR_MENU} hasSideBar={true}>
            {(response?.error || response?.success) && (
                <AlertComponent
                    type={response?.error ? 'error' : response?.success ? 'success' : ''}
                    message={response?.error || response?.success}
                    onClose={() => setResponse({ success: '', error: '' })}
                />
            )}
            <Grid container spacing={2.5}>
                <Grid item xs={12} lg={activeProfile ? 6 : 12}>
                    {tabDevices ? (
                        !activeProfile && (
                            <Wrapper>
                                <StyledSwiper
                                    className="mySwiper"
                                    onSlideChange={onSlideChange(page, setPage)}
                                    direction={'vertical'}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    grabCursor={true}
                                    modules={[Pagination]}
                                >
                                    {discoverList.map((user) => (
                                        <SwiperSlide key={user._id}>
                                            <UserProfileCard user={user} setActiveProfile={setActiveProfile} />
                                        </SwiperSlide>
                                    ))}
                                </StyledSwiper>
                            </Wrapper>
                        )
                    ) : (
                        <Wrapper ref={listInnerRef} onScroll={onScroll(listInnerRef, setPage)}>
                            <Grid container spacing={2.5}>
                                {discoverList.length > 0 &&
                                    discoverList.map((user) => (
                                        <Grid item xs={12} md={4} lg={activeProfile ? 6 : 2} key={user._id}>
                                            <UserProfileCard user={user} setActiveProfile={setActiveProfile} />
                                        </Grid>
                                    ))}
                            </Grid>
                        </Wrapper>
                    )}
                </Grid>
                {loading && (
                    <Grid item xs={12}>
                        <Box sx={{ textAlign: 'center' }}>
                            <CircularProgress />
                        </Box>
                    </Grid>
                )}
                {activeProfile && (
                    <Grid item xs={12} lg={6}>
                        <UserPreview
                            profile={activeProfile}
                            setActiveProfile={setActiveProfile}
                            setDiscoverList={setDiscoverList}
                            setResponse={setResponse}
                        />
                    </Grid>
                )}
            </Grid>
        </AppLayout>
    )
}
