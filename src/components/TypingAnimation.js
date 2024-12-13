import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingAnimation = () => {
    return (
        <div>
            <Typewriter
                options={{
                    strings: ['Computer Science Student',
                        'Machine Learning Engineer',
                        'Electrical Engineer',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                }}
            />
        </div>
    );
};

export default TypingAnimation;
