import { Entity, Note, Section } from '@musical-patterns/material'
import { apply, isUndefined, reciprocal, Scalar, to } from '@musical-patterns/utilities'
import { OMNIZONK_BASE_GAIN } from './constants'

const applyGainPerEntitiesCount: (entities: Entity[]) => Entity[] =
    (entities: Entity[]): Entity[] =>
        entities.map((entity: Entity): Entity => {
            if (!isUndefined(entity.sections)) {
                entity.sections.forEach((section: Section) => {
                    if (!isUndefined(section.notes)) {
                        section.notes.forEach((note: Note) => {
                            note.gain = {
                                scalar: apply.Scalar(
                                    OMNIZONK_BASE_GAIN,
                                    to.Scalar<Scalar<Scalar>>(reciprocal(entities.length)),
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
