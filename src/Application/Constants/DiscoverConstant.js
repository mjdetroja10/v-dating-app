import { BagIcon } from 'Application/Molecules/Icons/BagIcon'
import { DisLikeIcon } from 'Application/Molecules/Icons/DisLikeIcon'
import { LikeIcon } from 'Application/Molecules/Icons/LikeIcon'
import { LocationIcon } from 'Application/Molecules/Icons/LocationIcon'

export const userDetailList = (profile) => [
    {
        title: `${profile?.city}, ${profile?.state}`,
        icon: <LocationIcon height={24} width={24} />,
    },
    {
        title: `Long-Term Partner`,
        icon: <LocationIcon height={24} width={24} />,
    },
    {
        title: `Architect`,
        icon: <BagIcon height={24} width={24} />,
    },
]

export const actionList = [
    { title: 'Interested', icon: <LikeIcon height={48} width={48} /> },
    { title: 'Not Interested', icon: <DisLikeIcon height={48} width={48} /> },
]
