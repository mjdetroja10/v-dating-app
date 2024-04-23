import { allPatterns, requiredField } from 'Application/Components/auth/SignUp/Utils'

export const fieldInitalValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',

    city: '',
    state: '',
    zip: '',
    miles: '',
    birthDate: '2006-01-01',

    gender: '',
    lookingFor: '',
    interests: [],
    ageRange: [10, 30],
    habits: [],
    images: [null, null, null, null, null],
}

export const stepComponentError = {
    1: ['firstName', 'lastName', 'email', 'password'],
    2: ['city', 'state', 'zip', 'miles', 'birthDate'],
    3: ['gender'],
    4: ['lookingFor'],
    5: ['interests'],
    6: ['ageRange', 'habits'],
    7: ['images'],
}

export const Validations = {
    daterForm: {
        firstName: requiredField('First Name', allPatterns.alph),
        lastName: requiredField('Last Name', allPatterns.alph),
        email: requiredField('Email', allPatterns.email),
        password: requiredField('Password', '', { min: 8 }),
    },
    locationForm: {
        city: requiredField('City', allPatterns.alph),
        state: requiredField('State', allPatterns.alph),
        zip: requiredField('Zip', allPatterns.num, { min: 6, max: 6 }),
        miles: {
            ...requiredField('miles'),
            validate: (value) => {
                if (value < 0 || value > 100) {
                    return 'miles must be between 10 to 100'
                }
            },
        },
        birthdate: {
            ...requiredField('Birthdate'),
            validate: (value) => {
                let date = new Date(value)

                if (date.getFullYear() > 2006) {
                    return 'user must be an adult'
                }
            },
        },
    },
    genderForm: {
        gender: requiredField('gender'),
    },
    lookingForForm: {
        lookingFor: requiredField('lookingFor'),
    },
    interestsForm: {
        interets: requiredField('Interests Category'),
    },
    habitForm: {
        habits: requiredField('habits'),
    },
    profileForm: {
        images: {},
    },
}

export const lookingForOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Non-Binary', value: 'nonBinary' },
    { label: 'Any', value: 'any' },
]

export const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Non-Binary', value: 'nonBinary' },
    { label: 'Prefer Not To Say', value: 'preferNotToSay' },
]

export const habitOptions = [
    { value: 1, label: 'Socialite' },
    { value: 2, label: 'Enthusiast' },
    { value: 3, label: 'Reveler' },
    { value: 4, label: 'Mingle' },
    { value: 5, label: 'Boisterous' },
    { value: 6, label: 'Spirited' },
    { value: 7, label: 'Celebrator' },
    { value: 8, label: 'Lively' },
    { value: 9, label: 'Groove' },
    { value: 10, label: ' Festive' },
]

export const interestOptions = [
    { value: 1, label: 'dancing' },
    { value: 2, label: 'cooking' },
    { value: 3, label: 'doing stuff outdoors' },
    { value: 4, label: 'politics' },
    { value: 5, label: 'pets' },
    { value: 6, label: 'photography' },
    { value: 7, label: 'sports' },
    { value: 8, label: 'traveling' },
    { value: 9, label: 'reading' },
    { value: 10, label: 'painting' },
    { value: 11, label: 'music' },
    { value: 12, label: 'writing' },
    { value: 13, label: 'gardening' },
    { value: 14, label: 'watching movies' },
]
