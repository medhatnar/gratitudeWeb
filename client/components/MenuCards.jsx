import React from 'react';

export const MenuCards = ({
	cardInfo = ['card', 'card2', 'card3'],
	...props
}) => {
	return <>{cardInfo.map(info => {
        return (
            <div class="card">
            <h3 class="card-number">
            {info}
            </h3>
            <h2 class="card-title">{info}</h2>
            </div>
        )
    })}</>;
};
