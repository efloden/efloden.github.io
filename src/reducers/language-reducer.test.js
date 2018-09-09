/* global describe it expect */
import reducer from './language-reducer'
import { ENGLISH_STATE } from '../locales/en'
import { JAPANESE_STATE } from '../locales/ja'
import { CHANGE_LOCALE } from '../actions/action-types'

describe('language reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(ENGLISH_STATE)
  })

  it('should handle CHANGE_LOCALE', () => {
    const initial = reducer(undefined, {})
    const toJapanese = reducer(initial, {
      type: CHANGE_LOCALE,
      payload: {
        locale: JAPANESE_STATE
      }
    })
    expect(toJapanese).toEqual(JAPANESE_STATE)
    const toEnglish = reducer(initial, {
      type: CHANGE_LOCALE,
      payload: {
        locale: ENGLISH_STATE
      }
    })
    expect(toEnglish).toEqual(ENGLISH_STATE)
  })
})
