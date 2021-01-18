// import loadData from './api'
import axios from 'axios';
import config from '../config';
import {
    DATA_LIST,
    DATA_ADD,
    ADD,
    REMOVE,
    OPEN,
    CLOSE,
    SEARCH_NAME,
    SEARCH_TYPE
} from '../constants'

export const setStageName = (data) => {
    return {
        type: SEARCH_NAME,
        payload: data
    }
}

export const setStageType = (data) => {
    return {
        type: SEARCH_TYPE,
        payload: data
    }
}

export const setStageDataList = (data) => {
    return {
        type: OPEN,
        payload: data
    }
}

export const isCloseModal = () => {
    return {
        type: CLOSE,
    }
}

export const setStageDataAddList = (data) => {
    return {
        type: DATA_ADD,
        payload: data
    }
}

export const removeStageDataAddList = (data) => {
    return {
        type: REMOVE,
        payload: data
    }
}

export const removeDataLis = (dataAdd, id) => {
    return (dispatch) => {
        let resDataAdd = dataAdd.filter(item => item.id !== id);
        dispatch(removeStageDataAddList(resDataAdd))
    }
}

export const fetchData = (name, type, dataAdd, id) => {
    return (dispatch) => {
        let resDataList = []
        let resDataAdd = dataAdd ? dataAdd : []
        let searchName = name ? name : ''
        let searchType = type ? type : ''
        let resDamage1 = 0
        let resDamage2 = 0
        let resDamage = 0
        dispatch(setStageName(searchName))
        dispatch(setStageType(searchType))
        axios.get(`${config.apiUrl}/api/cards?limit=20&name=${searchName}&type=${searchType}`)
            .then(response => {
                if (response.data && response.data.cards) {
                    let cards = response.data.cards
                    for (let index in cards) {
                        for (let i in cards[index].attacks) {
                            if (i < 1) {
                                resDamage1 = (parseInt(cards[index].attacks[i].damage, 10) ? parseInt(cards[index].attacks[i].damage, 10) : 0)
                            } else {
                                resDamage2 = (parseInt(cards[index].attacks[i].damage, 10) ? parseInt(cards[index].attacks[i].damage, 10) : 0)
                                resDamage = resDamage1 + resDamage2
                            }
                        }
                        cards[index].damage = resDamage > 0 ? resDamage : resDamage1
                        cards[index].hp = cards[index].hp && parseInt(cards[index].hp, 10) ? parseInt(cards[index].hp, 10) >= 100 ? 100 : parseInt(cards[index].hp, 10) : 0
                        cards[index].strength = cards[index].attacks && cards[index].attacks.length > 0 ? (cards[index].attacks.length >= 2) ? 100 : cards[index].attacks.length * 50 : 0
                        cards[index].weaknesses = cards[index].weaknesses && cards[index].weaknesses.length > 0 ? (cards[index].weaknesses.length >= 1) ? 100 : cards[index].weaknesses.length * 100 : 0
                        cards[index].happiness = ((cards[index].hp / 10) + (cards[index].damage /10 ) + 10 - (cards[index].weaknesses / 100)) / 5
                        // resDataList.push({
                        //     id: cards[index].id,
                        //     name: cards[index].name,
                        //     imageUrl: cards[index].imageUrl,
                        //     hp: cards[index].hp,
                        //     hpValue: cards[index].hp && parseInt(cards[index].hp, 10) ? parseInt(cards[index].hp, 10) >= 100 ? 100 : parseInt(cards[index].hp, 10) : 0,
                        //     attacks: cards[index].attacks,
                        //     attacksValue: cards[index].attacks && cards[index].attacks.length > 0 ?
                        //         (cards[index].attacks.length >= 2) ? 100 : cards[index].attacks.length * 50 : 0,
                        //     weaknesses: cards[index].weaknesses,
                        //     weaknessesValue: cards[index].weaknesses && cards[index].weaknesses.length > 0 ?
                        //         (cards[index].weaknesses.length >= 1) ? 100 : cards[index].weaknesses.length * 100 : 0,
                        //     damage: cards[index].damage
                        // })
                    }
                    let fId = cards.find(item => item.id === id)
                    if (fId) {
                        resDataAdd.push(fId)
                    }

                    let filterDataAdd = resDataAdd.map(item => { return item.id; });
                    let filterCards = cards.filter(item => !filterDataAdd.includes(item.id));

                    dispatch(setStageDataList(filterCards))
                    dispatch(setStageDataAddList(resDataAdd))
                }
            })
            .catch((error) => {
                console.log('error : ', error)
            })
    }
}