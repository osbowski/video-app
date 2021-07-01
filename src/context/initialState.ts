import {Video} from '../types';
interface initialStateInterface{
    videos:Video[]
}

export const initialState:initialStateInterface = {
    videos:[
        {
            id:'123',
            link:'https://www.youtube.com/watch?v=Ndpryp2OlUQ&ab_channel=YelawolfVEVO',
            title: 'Yelawolf - Till It’s Gone (Official Music Video)',
            likes:100000,
            views:25039209,
            date: '10.01.2021'
        },
        {
            id:'456',
            link:'https://www.youtube.com/watch?v=fibYknUCIU4&ab_channel=NFVEVO',
            title: 'NF - CLOUDS',
            likes:123000,
            views:123339209,
            date: '20.01.2020'
        },
        {
            id:'789',
            link:'https://www.youtube.com/watch?v=TKO8zmF98nI&ab_channel=TacoHemingway',
            title: 'Taco Hemingway - "6 zer" (prod. Rumak)',
            likes:12300000,
            views:3455039209,
            date: '17.09.2009'
        }
    ]
}