// export const BASE_URL = "https://lm.demos2clients.com/api"
// export const UPLOADS_URL = "https://lm.demos2clients.com/"
export const BASE_URL = "http://192.168.0.161:5001/api"
export const UPLOADS_URL = "http://192.168.0.161:5001"
export const POSTS = {
    get: "/post",
    save: "/post",
    delete:"/post",
    import:"/post/import",
    export:"/post/data/export",
}
export const PORTFOLIO = {
    get: "/portfolio",
    save: "/portfolio",
    update:"/portfolio",
    delete:"/portfolio",
}
export const PLANS = {
    get: "/plan",
    save: "/plan",
    delete:'/plan',
}
export const AUTH = {
    login: "/auth/signin"
}
export const CATEGORY = {
    get: "/category",
    save: "/category",
    update:"/category",
    delete:"/category",

}
export const ORDERS = {
    get: "/order",
    save: "/order",
    delete: "/order",
    update:"/order"
}
export const INQUIRY = {
    get: "/inquiry",
    save: "/inquiry",
    delete: "/inquiry",
}
export const REVIEW = {
    get: "/review",
    save: "/review",
    delete: "/review",
    update:"/review"
}