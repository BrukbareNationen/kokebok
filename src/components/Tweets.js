import React from 'react';
import Tweet from './Tweet'

const Tweets = (props) => {

    const tweets = [{name: "dave", tweet: "react ughh, I need alcohol"},
    {name: "tracersy media", tweet: "what up guys, im out taking a break"},
    {name: "webdevsimplified", tweet : "hey guys im simplified the web? guysss helo,m where is everybody"}
    ];

 
    return (
        <section>
            {tweets.map(tweet => (
                <Tweet name={tweet.name} tweet={tweet.tweet} />
            ))}
        </section>
    );

};

export default Tweets