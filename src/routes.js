import English from './images/English.png'
import MathImg from './images/Math.png'
import SetImg from './images/SET.png'
import WordImg from './images/word-meaning.png'

export default {
    bg: 'purple',
    route: '/sets/',
    name: 'Exam Lists',
    children: {
        GMAT: {
            bg: 'purple',
            route: '/sets/GMAT',
            title: 'GMAT',
            children: {
                math: {
                    bg: 'orange',
                    route:'/sets/GMAT/math',
                    title:'Math',
                    img: MathImg,
                    children: {
                        'set-1-A':{
                            bg: 'orange',
                            route: '/sets/GMAT/math/set-1-A',
                            title: '1A',
                            img: SetImg,
                        },
                        'set-1-B':{
                            bg: 'orange',
                            route: '/sets/GMAT/math/set-1-B',
                            title: '1B',
                            img: SetImg,
                        },
                        'set-1-C':{
                            bg: 'orange',
                            route: '/sets/GMAT/math/set-1-C',
                            title: '1C',
                            img: SetImg,
                        },
                        'set-1-D':{
                            bg: 'orange',
                            route: '/sets/GMAT/math/set-1-D',
                            title: '1D',
                            img: SetImg,
                        },
                    }
                },
                english: {
                    bg: 'blue',
                    route:'/sets/GMAT/english',
                    title:'English',
                    img: English,
                    children: {
                        'set-1-A':{
                            bg: 'blue',
                            route: '/sets/GMAT/english/set-1-A',
                            title: '1A',
                            img: SetImg,
                        },
                        'set-1-B':{
                            bg: 'blue',
                            route: '/sets/GMAT/english/set-1-B',
                            title: '1B',
                            img: SetImg,
                        },
                        'set-1-C':{
                            bg: 'blue',
                            route: '/sets/GMAT/english/set-1-C',
                            title: '1C',
                            img: SetImg,
                        }
                    }
                },
            }
        },
        GRE: {
            bg: 'purple',
            route: '/sets/GRE',
            title: 'GRE',
            children: {
                math: {
                    bg: 'orange',
                    route:'/sets/GRE/math',
                    title:'Math',
                    img: MathImg,
                    children: {
                        'set-1-A':{
                            bg: 'orange',
                            route: '/sets/GRE/math/set-1-A',
                            title: '1A',
                            img: SetImg,
                        },
                        'set-1-B':{
                            bg: 'orange',
                            route: '/sets/GRE/math/set-1-B',
                            title: '1B',
                            img: SetImg,
                        },
                        'set-1-C':{
                            bg: 'orange',
                            route: '/sets/GRE/math/set-1-C',
                            title: '1C',
                            img: SetImg,
                        },
                        'set-2-A':{
                            bg: 'teal',
                            route: '/sets/GRE/math/set-2-A',
                            title: '2A',
                            img: SetImg,
                        },
                        'set-2-B':{
                            bg: 'teal',
                            route: '/sets/GRE/math/set-2-B',
                            title: '2B',
                            img: SetImg,
                        },
                        'set-2-C':{
                            bg: 'teal',
                            route: '/sets/GRE/math/set-2-C',
                            title: '2C',
                            img: SetImg,
                        },
                        'set-3-A':{
                            bg: 'blue',
                            route: '/sets/GRE/math/set-3-A',
                            title: '3A',
                            img: SetImg,
                        },
                        'set-3-B':{
                            bg: 'blue',
                            route: '/sets/GRE/math/set-3-B',
                            title: '3B',
                            img: SetImg,
                        },
                        'set-3-C':{
                            bg: 'blue',
                            route: '/sets/GRE/math/set-3-C',
                            title: '3C',
                            img: SetImg,
                        },
                        'set-4-A':{
                            bg: 'orange',
                            route: '/sets/GRE/math/set-4-A',
                            title: '4A',
                            img: SetImg,
                        },
                        'set-4-B':{
                            bg: 'orange',
                            route: '/sets/GRE/math/set-4-B',
                            title: '4B',
                            img: SetImg,
                        },
                        'set-4-C':{
                            bg: 'orange',
                            route: '/sets/GRE/math/set-4-C',
                            title: '4C',
                            img: SetImg,
                        },
                        'set-5-A':{
                            bg: 'orange',
                            route: '/sets/GRE/math/set-5-A',
                            title: '5A',
                            img: SetImg,
                        },
                        'set-5-B':{
                            bg: 'orange',
                            route: '/sets/GRE/math/set-5-B',
                            title: '5B',
                            img: SetImg,
                        },
                        'set-5-C':{
                            bg: 'orange',
                            route: '/sets/GRE/math/set-5-C',
                            title: '5C',
                            img: SetImg,
                        },
                    }
                },
                english: {
                    bg: 'indigo',
                    route:'/sets/GRE/english',
                    title:'English',
                    img: English,
                    children: {
                        'set-1-A': {
                            bg: 'orange',
                            route: '/sets/GRE/english/set-1-A',
                            title: '1A',
                            img: SetImg,
                        },
                        'set-1-B': {
                            bg: 'orange',
                            route: '/sets/GRE/english/set-1-B',
                            title: '1B',
                            img: SetImg,
                        },
                        'set-1-C': {
                            bg: 'orange',
                            route: '/sets/GRE/english/set-1-C',
                            title: '1C',
                            img: SetImg,
                        },
                        'set-2-A': {
                            bg: 'red',
                            route: '/sets/GRE/english/set-2-A',
                            title: '2A',
                            img: SetImg,
                        },
                        'set-2-B': {
                            bg: 'red',
                            route: '/sets/GRE/english/set-2-B',
                            title: '2B',
                            img: SetImg,
                        },
                        'set-2-C': {
                            bg: 'orange',
                            route: '/sets/GRE/english/set-2-C',
                            title: '2C',
                            img: SetImg,
                        },
                        'set-3-A': {
                            bg: 'indigo',
                            route: '/sets/GRE/english/set-3-A',
                            title: '3A',
                            img: SetImg,
                        },
                        'set-3-B': {
                            bg: 'indigo',
                            route: '/sets/GRE/english/set-3-B',
                            title: '3B',
                            img: SetImg,
                        },
                        'set-3-C': {
                            bg: 'orange',
                            route: '/sets/GRE/english/set-3-C',
                            title: '3C',
                            img: SetImg,
                        },
                        'set-4-A': {
                            bg: 'purple',
                            route: '/sets/GRE/english/set-4-A',
                            title: '4A',
                            img: SetImg,
                        },
                        'set-4-B': {
                            bg: 'purple',
                            route: '/sets/GRE/english/set-4-B',
                            title: '4B',
                            img: SetImg,
                        },
                        'set-4-C': {
                            bg: 'purple',
                            route: '/sets/GRE/english/set-4-C',
                            title: '4C',
                            img: SetImg,
                        },
                        'set-5-A': {
                            bg: 'pink',
                            route: '/sets/GRE/english/set-5-A',
                            title: '5A',
                            img: SetImg,
                        },
                        'set-5-B': {
                            bg: 'pink',
                            route: '/sets/GRE/english/set-5-B',
                            title: '5B',
                            img: SetImg,
                        },
                        'set-5-C': {
                            bg: 'pink',
                            route: '/sets/GRE/english/set-5-C',
                            title: '5C',
                            img: SetImg,
                        },
                        'set-6-A': {
                            bg: 'gray',
                            route: '/sets/GRE/english/set-6-A',
                            title: '6A',
                            img: SetImg,
                        },
                        'set-6-B': {
                            bg: 'gray',
                            route: '/sets/GRE/english/set-6-B',
                            title: '6B',
                            img: SetImg,
                        },
                        'set-6-C': {
                            bg: 'gray',
                            route: '/sets/GRE/english/set-6-C',
                            title: '6C',
                            img: SetImg,
                        },
                        'words': {
                            bg: 'gray',
                            route:'/GRE/english/word-meaning',
                            title: 'W',
                            img:SetImg
                        }
                    }
                },
                words : {
                    bg: 'teal',
                    route:'/sets/GRE/english/word-meaning',
                    title: 'Word Meaning',
                    img: WordImg
                },
            }
        }
    }
}
