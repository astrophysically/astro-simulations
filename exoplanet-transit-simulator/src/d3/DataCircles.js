import React from 'react';

const renderCircles = props => {
    return (coords, index) => {
        const circleProps = {
            cx: props.xScale(coords[0]),
            cy: props.yScale(coords[1]),
            r: 2,
            fill: '#909090',
            key: index
        };
        return <circle {...circleProps} />;
    };
};

const DataCircles = props => {
    return <g>{props.data.map(renderCircles(props))}</g>;
};

export default DataCircles;
