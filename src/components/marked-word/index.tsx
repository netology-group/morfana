import React, { FC, useContext } from 'react'
import { MarkedWordProps } from '../../types'
import { MorfanaContext } from '../../contexts/morfana'
import { Word } from '../word'

export const MarkedWord: FC<MarkedWordProps> = ({
  className = '',
  markup = '',
  word = '',
  config,
  foregroundLetters,
  debug = false,
}: MarkedWordProps) => {
  const { Morfana } = useContext(MorfanaContext)
  if (!word?.length) return null

  const { symbolsMap, markupData } = Morfana.process({ word, markup, config })

  return (
    <Word
      className={className}
      symbolsMap={symbolsMap}
      markupData={markupData}
      foregroundLetters={foregroundLetters}
      debug={debug}
    />
  )
}

export { MarkedWordProps }
