import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const AnimCursor = () => {
    return (
        <AnimatedCursor
            innerSize={8}
            outerSize={30}
            color='29, 57, 62'
            outerAlpha={0.9}
            innerScale={0.5}
            outerScale={5}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
        />
    )
}

export default AnimCursor