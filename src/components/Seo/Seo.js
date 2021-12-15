import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({title, canonUrl, description, ogUrl, ogType, ogTitle, ogDescription, ogImage, ogAlt, ...rest}) => {
    return(
        <>
            <Helmet
                title={title}
                htmlAttributes={{ lang: "ro" }}
            >
                <link rel="canonical" href={canonUrl} />
                <meta name="description" content={description} />
                <meta property="og:url" content={ogUrl} />
                <meta property="og:type" content={ogType} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={ogAlt} />
            </Helmet>
            {rest.children}
        </>
    )
}

export default Seo;