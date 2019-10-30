import React from "react"
import { Link } from "gatsby"

export default props => {
    const { locale, to, children } = props
    let path
    locale !== "en" ? (path = `/${locale}${to}`) : (path = to)
    return <Link className={props.className} children={children} to={path} />
}
