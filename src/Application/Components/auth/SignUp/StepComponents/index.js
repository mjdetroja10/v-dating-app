import PropTypes from 'prop-types'

import { DaterForm } from './DaterForm'
import { GenderForm } from './GenderForm'
import { HabitsForm } from './HabitsForm'
import { InterestForm } from './InterestForm'
import { LocationForm } from './LocationForm'
import { LookingForForm } from './LookingForForm'
import { ProfilePicForm } from './ProfilePicForm'

export const StepComponents = ({ step }) => {
    switch (step) {
        case 1:
            return <DaterForm />

        case 2:
            return <LocationForm />

        case 3:
            return <GenderForm />

        case 4:
            return <LookingForForm />

        case 5:
            return <InterestForm />

        case 6:
            return <HabitsForm />

        case 7:
            return <ProfilePicForm />

        default:
            return null
    }
}

StepComponents.propTypes = {
    step: PropTypes.number,
}
