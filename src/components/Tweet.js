import React from 'react';

const Tweet = (props) => (
    <section>
        <h1>{props.name}</h1>
        <p>{props.tweet}</p>
    </section>
);

export default Tweet