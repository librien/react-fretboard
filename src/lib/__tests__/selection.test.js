import {
  intervalNotes,
  namedIntervalNotes,
  chordNotes,
  namedChordNotes,
  scaleNotes,
  namedScaleNotes,
} from '../selection'

describe('selection, intervals', () => {
  it('should return array of interval pcs', () => {
    const note = 'C'
    const ivl = 4 // 3M
    const expected = ['C', 'E']
    expect(intervalNotes(note, ivl)).toEqual(expected)
  })

  it('should return array of interval pitches', () => {
    const note = 'C4'
    const ivl = 4 // 3M
    const expected = ['C4', 'E4']
    expect(intervalNotes(note, ivl)).toEqual(expected)
  })

  it('named pc noteObj', () => {
    const note = 'C'
    const ivl = 4
    const expected = [
      {
        note: 'C',
        status: 'selected',
        label: '1P',
      },
      {
        note: 'E',
        status: 'selected',
        label: '3M',
      },
    ]
    expect(namedIntervalNotes(note, ivl)).toEqual(expected)
  })

  it('named pc noteObj, nameStatus', () => {
    const note = 'C'
    const ivl = 4
    const expected = [
      {
        note: 'C',
        status: '1P',
        label: '1P',
      },
      {
        note: 'E',
        status: '3M',
        label: '3M',
      },
    ]
    expect(namedIntervalNotes(note, ivl, true)).toEqual(expected)
  })
})

describe('selection, chords', () => {
  it('should return array of chord pcs', () => {
    const chord = 'CM'
    const expected = ['C', 'E', 'G']
    expect(chordNotes(chord)).toEqual(expected)
  })

  it('should return array of chord pitches', () => {
    const chord = 'C4M'
    const expected = ['C4', 'E4', 'G4']
    expect(chordNotes(chord)).toEqual(expected)
  })

  it('named pc noteObj', () => {
    const chord = 'CM'
    const expected = [
      {
        note: 'C',
        status: 'selected',
        label: '1P',
      },
      {
        note: 'E',
        status: 'selected',
        label: '3M',
      },
      {
        note: 'G',
        status: 'selected',
        label: '5P',
      },
    ]
    expect(namedChordNotes(chord)).toEqual(expected)
  })

  it('named pitch noteObj', () => {
    const chord = 'C4M'
    const expected = [
      {
        note: 'C4',
        status: 'selected',
        label: '1P',
      },
      {
        note: 'E4',
        status: 'selected',
        label: '3M',
      },
      {
        note: 'G4',
        status: 'selected',
        label: '5P',
      },
    ]
    expect(namedChordNotes(chord)).toEqual(expected)
  })

  it('named pitch noteObj, nameStatus', () => {
    const chord = 'C4M'
    const expected = [
      {
        note: 'C4',
        status: '1P',
        label: '1P',
      },
      {
        note: 'E4',
        status: '3M',
        label: '3M',
      },
      {
        note: 'G4',
        status: '5P',
        label: '5P',
      },
    ]
    expect(namedChordNotes(chord, true)).toEqual(expected)
  })
})

describe('selection, scales', () => {
  it('should return array of scale pcs', () => {
    const tonic = 'C'
    const scale = 'major'
    expect(scaleNotes(tonic, scale)).toMatchSnapshot()
  })


  it('should return array of scale pitches', () => {
    const tonic = 'C4'
    const scale = 'major'
    expect(scaleNotes(tonic, scale)).toMatchSnapshot()
  })

  it('named pc noteObj', () => {
    const tonic = 'C4'
    const scale = 'major'
    expect(namedScaleNotes(tonic, scale)).toMatchSnapshot()
  })
/*
  it('named pitch noteObj', () => {
    const chord = 'C4M'
    const expected = [
      {
        note: 'C4',
        status: 'selected',
        label: '1P',
      },
      {
        note: 'E4',
        status: 'selected',
        label: '3M',
      },
      {
        note: 'G4',
        status: 'selected',
        label: '5P',
      },
    ]
    expect(namedChordNotes(chord)).toEqual(expected)
  })

  it('named pitch noteObj, nameStatus', () => {
    const chord = 'C4M'
    const expected = [
      {
        note: 'C4',
        status: '1P',
        label: '1P',
      },
      {
        note: 'E4',
        status: '3M',
        label: '3M',
      },
      {
        note: 'G4',
        status: '5P',
        label: '5P',
      },
    ]
    expect(namedChordNotes(chord, true)).toEqual(expected)
  })
  */
})
