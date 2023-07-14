import { StringObject } from './types'

export function isStringArray(arr: unknown[]): arr is string[] {
  return arr.every((val) => typeof val === 'string')
}

export function isObjectArray(arr: unknown[]): arr is { [key: string]: string }[] {
  return arr.every((val) => typeof val === 'object' && !Array.isArray(val))
}

type Key = string | number | symbol | null
export function isKeyOf<T extends StringObject[]>(arr: T, key: Key): key is keyof T[number] {
  if (key === null) return false
  return arr.some((obj) => key in obj)
}
