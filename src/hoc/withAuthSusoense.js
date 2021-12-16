import React from "react";
import Loading from "../components/common/loading/loading";

export const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<div><Loading/></div>}>
            <Component {...props}/>
        </React.Suspense>
    }
}