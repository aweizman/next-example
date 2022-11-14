import React from 'react'
import useTranslate from './useTranslate'

const T = props => {
  const { t } = useTranslate()
  return <>{t(props.children)}</>
}

export default T
