import { render } from "react-dom"

const people = [
    {
        name: 'A'
    },
    {
        name: 'B'
    },
    {
        name: 'C'
    }
]

export default () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(people)
            }, 3000)
        })
    }