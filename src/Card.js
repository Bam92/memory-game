import React from 'react';

import './Card.css';

const HIDDEN_SYMBOL = '?';

const Card = ({ card, feeback, onClick }) => (
    <div className={`card ${feeback}`} onClick={() => onClick(card)}>
        <span className='symbol'>
            {feeback === 'hidden' ? HIDDEN_SYMBOL : card}
        </span>
    </div>
)

export default Card