import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
        <div class="cardContainer">
            <CardBanner />
            <div class="cardText">
                <CardContent />
            </div>
        </div>
    )
}

export default CardContainer;