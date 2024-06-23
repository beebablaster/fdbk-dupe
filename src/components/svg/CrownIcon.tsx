import React from "react"

export const CrownIcon: React.FC<{fill: string}> = ({ fill }) => {
    return (
        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.96697 17.7039L0 1.47533L8.15916 8.85197L13.3514 0L18.5435 8.85197L26.7027 1.47533L23.7357 17.7039H2.96697ZM23.7357 22.1299C23.7357 23.0151 23.1423 23.6053 22.2523 23.6053H4.45045C3.56036 23.6053 2.96697 23.0151 2.96697 22.1299V20.6546H23.7357V22.1299Z" fill={fill}/>
        </svg>
    )
}