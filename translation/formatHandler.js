const ordinalFormatter = (value, lng) => {
  switch (value) {
    case 0: return 'First'
    case 1: return 'Second'
    case 2: return 'Third'
    case 3: return 'Fourth'
    case 4: return 'Fifth'
    case 5: return 'Sixth'
    case 6: return 'Seventh'
    case 8: return 'Nineth'
    case 9: return 'Tenth'
    default: return (value + 1) + ''
  }
}

const formatHandler = (value, format, lng) => {
  if (format === 'ordinal') return ordinalFormatter(value, lng)
  return value
}

export default formatHandler
