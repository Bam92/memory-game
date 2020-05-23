import React from 'react';
import PropTypes from 'prop-types'

import './Card.css';

const HIDDEN_SYMBOL = '?';

const Card = ({ card, feeback, index, onClick }) => (
    <div className={`card ${feeback}`} onClick={() => onClick(index)}>
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
        'justMissmatched',
        'visible'
    ]).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Card