import { RangedSpecPropertyAttributes, Spec, SpecAttributes } from '@musical-patterns/pattern'
import { Base, Denominator } from '@musical-patterns/utilities'

interface OmnizonkSpec extends Spec {
    maxEqualDivision: Denominator,
    minEqualDivision: Denominator,
    window: Base,
}

interface OmnizonkSpecAttributes extends SpecAttributes {
    maxEqualDivision: RangedSpecPropertyAttributes,
    minEqualDivision: RangedSpecPropertyAttributes,
    window: RangedSpecPropertyAttributes,
}

export {
    OmnizonkSpec,
    OmnizonkSpecAttributes,
}
