
const safe = (v, fn) => {
  if (typeof v === 'string') return fn(v)
  return v
}

export const normalizeDefault = v => v

export const normalizeUpperCase = v => safe(v, s => s.toUpperCase())

export const normalizeNumeric = v => safe(v, s => s.replace(/[^0-9]/g, ''))

export const normalizeNumericDecimal = v => safe(v, s => s.replace(/[^0-9.]/g, ''))

export const normalizeNumericDecimalWithNegatives = v => safe(v, s => s.replace(/[^0-9.-]/g, ''))

export const normalizeNumericHyphen = v => safe(v, s => s.replace(/[^0-9-]/g, ''))

export const normalizeParseInt = v => safe(v, s => s.length > 0 ? window.parseInt(s, 10) : '')

export const normalizeMoney = v => safe(v, s => {
  const parsed = (+normalizeNumericDecimalWithNegatives(s)).toFixed(2)
  if (!parsed || isNaN(parsed)) return ''
  return parsed
})

export const normalizeZip = v => {
  if (!v) return v

  const onlyNums = v.replace(/[^\d]/g, '')
  if (onlyNums.length <= 5) return onlyNums

  return onlyNums.slice(0, 5) + '-' + onlyNums.slice(5, 9)
}

export const normalizePhone = (value, previousValue) => {
  if (!value) return value

  const onlyNums = value.replace(/[^\d]/g, '')
  if (!previousValue || value.length > previousValue.length) {
    if (onlyNums.length === 3) return onlyNums + '-'
    if (onlyNums.length === 6) return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3)
    if (onlyNums.length === 10) return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6)
  }
  if (onlyNums.length <= 3) return onlyNums
  if (onlyNums.length <= 6) return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3)
  if (onlyNums.length <= 10) return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6)

  return onlyNums.slice(0, 3) + '-' + onlyNums.slice(3, 6) + '-' + onlyNums.slice(6, 10)
}
