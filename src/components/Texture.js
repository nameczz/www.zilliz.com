
import React, {useEffect, useRef} from "react";
import textures from 'textures';
import * as d3 from 'd3';

const Texture = props => {
    const ref = useRef();
    const {type, size, method, fillColor, strokeColor} = props;
    useEffect(() => {
        if (!ref) {
            return;
        }
        let svg = d3.select(ref.current)
                    .append('svg')
                    .attr('width', '100%')
                    .attr('height', '100%');

        let t = null;
        if (type === 'circles') {
            t = textures[type]()[method]()
                    .size(size || 10)
                    .fill(fillColor || '#FFFFFF')
                    .stroke(strokeColor || '#FFFFFF');
        }
    
        if(type === 'lines') {
            t = textures[type]()[method]()
                    .orientation('5/8')
                    .stroke(strokeColor || '#FFFFFF');
        }
    
        svg.call(t);
        svg.append('rect')
            .attr('width', '100%')
            .attr('height', '100%')
            .style('fill', t.url());
    
        if (type === 'lines') {
            svg.style('stroke-linecap', 'round')
            svg.style('stroke-dasharray', ('1, 3'));
        }
    }, []);
    return (
        <div ref={ref} style={{position: 'absolute', width: '100%', height: '100%', left: 0, top: 0, zIndex: 1}}></div> 
    )
}

export default Texture;