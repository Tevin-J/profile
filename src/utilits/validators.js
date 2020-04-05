export const requiredField = (value) => {
    if (!value) return 'Поле обязательно для заполнения'
}
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Максимальная длина ${maxLength} символов`
    return undefined
}
export const minLengthCreator = (minLength) => (value) => {
    if (value.length < minLength) return `Минимальная длина ${minLength} символов`
    return undefined
}
