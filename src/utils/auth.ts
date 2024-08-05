export const checkToken = (token: string) => {
    const result = !["",undefined,null].includes(token) ? true : false
    return result;
}