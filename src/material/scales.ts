import { Scale } from '@musical-patterns/material'
import { StandardSpec } from '@musical-patterns/spec'
import {
    computeEqualDivisionPitchScalars,
    Denominator,
    musicalAs,
    NO_SHIFT,
    Pitch,
    Scalar,
    Translation,
} from '@musical-patterns/utilities'
import { OmnizonkSpecs } from '../spec'
import { computeEqualDivisions } from './custom'

// tslint:disable-next-line no-any
const materializeScales: (specs: OmnizonkSpecs) => Array<Scale<any>> =
    // tslint:disable-next-line no-any
    (specs: OmnizonkSpecs): Array<Scale<any>> => {
        const equalDivisions: Denominator[] = computeEqualDivisions(specs)
        const basis: Pitch = specs[ StandardSpec.BASIS_FREQUENCY ] || musicalAs.Pitch(1)
        const translation: Translation<Pitch> = specs[ StandardSpec.BASIS_FREQUENCY_TRANSLATION ] || NO_SHIFT

        return equalDivisions.map((equalDivision: Denominator) => {
            const scalars: Array<Scalar<Pitch>> = computeEqualDivisionPitchScalars(equalDivision, specs.period)

            return { basis, scalars, translation }
        })
    }

export {
    materializeScales,
}
