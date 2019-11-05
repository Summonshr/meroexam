import { sampleSize, concat, shuffle} from 'lodash'
// Convert questions list to generate word meaning
const convertToWordMeaning = (data) => {
    return {questions: sampleSize(data, 10).map(e=>{
        let answer = [e.meaning]
        let options = [
            'A','B','C','D','E'
        ]
        let right = ''

        let choices = shuffle(concat(sampleSize(data, 4).map(e=>e.meaning), answer)).map((e,i)=>{
            if(e === answer[0]) {
                right = options[i] 
            }
            return {key: options[i], answer: e}
        })
        return {
            question: 'What is the meaning of word: ' + e.word + '?',
            meaning: true,
            options: choices,
            right: [
                right
            ]
        }
    }), parent: []}
}

export default convertToWordMeaning