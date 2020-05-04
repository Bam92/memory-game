import React from 'react';
import PropTypes from 'prop-types'

import './Card.css';

const HIDDEN_SYMBOL = '?';

const Card = ({ card, feeback, onClick }) => (
    <div className={`card ${feeback}`} onClick={() => onClick(card)}>
        <span className='symbol'>
            {feeback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

Card.propTypes = {
    card: PropTypes.string.isRequired,
    feeback: PropTypes.oneOf([
        'hidden',
        'justMatched',
        'justMismatched',
        'visible'
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Card