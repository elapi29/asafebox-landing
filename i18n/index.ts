import { dictionaries, type Locale } from './dictionaries'

export function getDict(locale: Locale) {
  return dictionaries[locale] ?? dictionaries.en
}