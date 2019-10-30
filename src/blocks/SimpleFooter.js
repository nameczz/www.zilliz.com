import React from "react"
import "./SimpleFooter.scss"

const SimpleFooter = () => {
    return (
        <footer className="" data-block-type="footers" data-id="9">
            © {new Date().getFullYear()}.
            <a href="https://www.zilliz.com">Zilliz</a>
        </footer>
    )
}

export default SimpleFooter
