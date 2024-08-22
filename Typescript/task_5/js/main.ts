interface MajorCredits {
    credits: number
}

interface MinorCredits {
    credits: number
}

// I'm going to be honest, I'm not sure if this is even correct or not

type MajorCreditsType = MajorCredits & { __brand: "MajorCredits" }
type MinorCreditsType = MinorCredits & { __brand: "MinorCredits" }

function sumMajorCredits(subject1: MajorCreditsType, subject2: MajorCreditsType) {
    return subject1.credits + subject2.credits
}

function sumMinorCredits(subject1: MinorCreditsType, subject2: MinorCreditsType) {
    return subject1.credits + subject2.credits
}