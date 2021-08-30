import React from 'react'
import { useSelector } from 'react-redux'

const About = () => {
const uiValue = useSelector(state => state.uiReducers)

    return (
        <div style = {{color:uiValue === "v1"?"green":"yellow"}}>
            This is about us page!
        </div>
    )
}

export default About
