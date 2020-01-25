import { Feature, Note, Scale } from '@musical-patterns/material'
import { as, Denominator, Pitch, Rational, Scalar, Value } from '@musical-patterns/utilities'
import { computeContourElement, computeNote } from '../../../src/indexForTest'

describe('features', () => {
    let note: Note
    const rational: Rational = [ as.Numerator(4), as.Denominator(7) ]
    const minEqualDivision: Denominator = as.Denominator(5)
    beforeEach(() => {
        note = computeNote(computeContourElement(rational, minEqualDivision))
    })

    describe('pitch', () => {
        let pitch: Feature<Pitch>
        beforeEach(() => {
            pitch = note.pitch!
        })

        it('picks the scale corresponding to its equal division', () => {
            expect(pitch.scaleIndex)
                .toBe(as.Ordinal<Array<Scale<Pitch>>>(2))
        })

        it('index is the step', () => {
            expect(pitch.index)
                .toBe(as.Ordinal<Array<Scalar<Pitch>>>(4))
        })
    })

    describe('value', () => {
        let value: Feature<Value>
        beforeEach(() => {
            value = note.value!
        })

        it('has a really really long value, because this pattern is essentially just holding a single tone cluster forever', () => {
            expect(value.scalar!)
                .toBeGreaterThanOrEqualTyped(as.Scalar(9999))
        })
    })
})
