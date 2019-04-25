import { Entity, Note, Section } from '@musical-patterns/material'
import { Amplitude, as, isUndefined, reciprocal, Scalar, use } from '@musical-patterns/utilities'
import { OMNIZONK_GAIN_SCALAR_SCALAR } from './constants'

const applyGainPerEntitiesCount: (entities: Entity[]) => Entity[] =
    (entities: Entity[]): Entity[] =>
        entities.map((entity: Entity): Entity => {
            if (!isUndefined(entity.sections)) {
                entity.sections.forEach((section: Section) => {
                    if (!isUndefined(section.notes)) {
                        section.notes.forEach((note: Note) => {
                            note.gain = {
                                scalar: use.Scalar(
                                    as.Scalar<Amplitude>(reciprocal(entities.length)),
                                    OMNIZONK_GAIN_SCALAR_SCALAR,
                                ),
                            }
                        })
                    }
                })
            }

            return entity
        })

export {
    applyGainPerEntitiesCount,
}
