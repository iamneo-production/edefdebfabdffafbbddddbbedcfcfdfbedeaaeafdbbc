import React from 'react';
import Button from '../Button/Button';

const Card = ({ question, options, handleAnswer, disabled }) => {
    const [state, setState] = React.useState(false);

    function disableBtn() {
        setState(true);
    }

    return (
        <div>
            <h4>{question}</h4>
            <Button onClick={() => handleAnswer(options.option1)} disabled={disabled || state}>
                {options.option1}
            </Button>
            <Button onClick={() => handleAnswer(options.option2)} disabled={disabled || state}>
                {options.option2}
            </Button>
            <Button onClick={() => handleAnswer(options.option3)} disabled={disabled || state}>
                {options.option3}
            </Button>
            <Button onClick={() => handleAnswer(options.option4)} disabled={disabled || state}>
                {options.option4}
            </Button>
        </div>
    );
};

export default Card;
