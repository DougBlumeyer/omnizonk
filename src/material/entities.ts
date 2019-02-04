import { Entity } from '@musical-patterns/compiler'
import { Count, Denominator, from, INITIAL, to, zeroAndPositiveIntegers } from '@musical-patterns/utilities'
import { buildEqualDivisions, calculateEntityCount } from '../custom'
import { OmnizonkSpec } from '../types'
import { buildNoteSpec } from './notes'

const buildEntities: (spec: OmnizonkSpec) => Entity[] =
    (spec: OmnizonkSpec): Entity[] => {
        const equalDivisions: Denominator[] = buildEqualDivisions(spec)
        const entityCount: Count = calculateEntityCount(spec)

        return equalDivisions.reduce(
            (accumulatingEntities: Entity[], equalDivision: Denominator): Entity[] => {
                const entitiesForEqualDivision: Entity[] = zeroAndPositiveIntegers
                    .slice(from.Index(INITIAL), from.FractionalPart(equalDivision))
                    .map((step: number) => ({
                        noteSpecs: [
                            buildNoteSpec(
                                [ to.Numerator(step), equalDivision ],
                                spec.minEqualDivision,
                                entityCount,
                            ),
                        ],
                    }))

                return accumulatingEntities.concat(entitiesForEqualDivision)
            },
            [],
        )
    }

export {
    buildEntities,
}
