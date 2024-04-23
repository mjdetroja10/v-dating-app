import { homeHeaderMenu } from 'Application/Constants/HeaderConstant'
import { SIGNUP_URL } from 'Application/Constants/RouteConstant'
import { AppLayout } from 'Application/layouts/AppLayout'
import { QuationIcon } from 'Application/Molecules/Icons/QuationIcon'
import { SearchHeartIcon } from 'Application/Molecules/Icons/SearchHeartIcon'
import { TwoHeartsIcon } from 'Application/Molecules/Icons/TwoHeartsIcon'
import { useNavigate } from 'react-router-dom'

import { Box, Container, Grid, Stack, Typography } from '@mui/material'

import { BorderBox, Content, MatchWrapper } from './Home.styled'

export const Home = () => {
    const navigate = useNavigate()

    return (
        <AppLayout headerMenu={homeHeaderMenu}>
            <Box sx={{ height: '100vh', paddingTop: '40px', paddingBottom: '40px', marginTop: '90px' }}>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12} lg={6}>
                            <Box sx={{ textAlign: 'center' }}>
                                <img src="/images/Heart-image.png" alt="heart-image" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Content>
                                <Box>
                                    <Typography variant="h4" color="primary" mb={2.5} sx={{ maxWidth: '500px' }}>
                                        Common Threads Leading To Uncommon Connections
                                    </Typography>
                                    <Stack direction="row" gap={2.5} justifyContent="center" alignItems="center">
                                        <QuationIcon height={75} width={60} />
                                        <BorderBox>
                                            <Typography variant="h5" color="primary">
                                                Dating never felt this comfortable, I love it, my friends are excited to
                                                have helped me, and I found someone I really connect with.
                                            </Typography>
                                        </BorderBox>
                                    </Stack>
                                </Box>

                                <Box>
                                    <Typography variant="h4" color="primary" mb={2.5} align="center">
                                        Get Started!
                                    </Typography>
                                    <MatchWrapper onClick={() => navigate(SIGNUP_URL)}>
                                        <Box sx={{ padding: { xs: '5px 30px', md: '12px 61px' }, textAlign: 'center' }}>
                                            <TwoHeartsIcon height={48} width={80} />
                                            <Typography variant="body1" color="black.dark" mt={1.5}>
                                                Find A Match
                                            </Typography>
                                        </Box>
                                        <Box sx={{ padding: { xs: '5px 30px', md: '12px 61px' }, textAlign: 'center' }}>
                                            <SearchHeartIcon height={45} width={45} />
                                            <Typography variant="body1" color="black.dark" mt={1.5}>
                                                Be A Matchmaker
                                            </Typography>
                                        </Box>
                                    </MatchWrapper>
                                </Box>
                            </Content>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </AppLayout>
    )
}
