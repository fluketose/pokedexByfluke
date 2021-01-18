import React from 'react';
import  colors from './colors'

import iconHappy from '../src/cute.png';

export default (
    {
        id,
        name,
        imageUrl,
        hp,
        strength,
        weaknesses,
        status,
        happiness,
        onClick
    }) => {
    let happyList = []
    const renderHappy = () => {
        let number = Math.round(happiness)
        for (let i = 1; i <= number; i++) {
            happyList.push(i)
        }
    }
    renderHappy()
    return (
        <div className="card-view" key={id}>
            <img className="card-view-img" src={imageUrl} />
            <div className="card-view-detail">
                <div>{name}</div>
                <div className="row">
                    <label>HP</label>
                    <div>
                        <input
                            type="range"
                            className="slider"
                            min="0"
                            max="100"
                            value={hp}
                        // value={hp ? parseInt(hp, 10) >= 100 ? 100 : parseInt(hp, 10) : 0 }
                        />
                    </div>
                </div>
                <div>
                    <div>STR</div>
                    <input
                        type="range"
                        className="slider"
                        min="0"
                        max="100"
                        value={strength}
                    // value={attacks && attacks.length > 0 ? (attacks.length * 50) >= 100 ? 100 : attacks.length * 50 : 0}
                    />
                </div>
                <div>
                    <div>WEAK</div>
                    <input
                        type="range"
                        className="slider"
                        min="0"
                        max="100"
                        value={weaknesses}
                    // value={weaknesses && weaknesses.length > 0 ? (weaknesses.length * 100) >= 100 ? 100 : weaknesses.length * 100 : 0 }
                    />
                </div>
                <div className="row">
                    {
                        happyList && happyList.length > 0 ? (
                            happyList.map(i => (
                                <div key={i} style={{ width: 30 }}>
                                    <img src={iconHappy} width="24" height="24" />
                                </div>
                            ))
                        )
                            : null
                    }
                </div>
            </div>
            {
                status === 'ADD' ? (
                    <a style={{ color: colors.Fire, cursor: 'pointer' }} onClick={onClick}>Add</a>
                )
                    : (
                        <a style={{ color: colors.Fire, cursor: 'pointer' }} onClick={onClick}>X</a>
                    )
            }
        </div>
    )
}