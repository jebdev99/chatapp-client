export const messageSentAt = ():string => {
    const date = new Date();
    const dateFormat = date.toISOString()
    return dateFormat
}