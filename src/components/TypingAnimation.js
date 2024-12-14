import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingAnimation = (props) => {
    const { strings } = props;
    return (
        <div>
            <Typewriter
                options={{
                    strings: strings,
                    autoStart: true,
                    loop: true,
                    delay: 75,
                }}
            />
        </div>
    );
};

export default TypingAnimation;
