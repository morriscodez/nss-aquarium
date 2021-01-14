import { useFish } from './Fish/FishDataProvider.js'

const allTheFish = useFish();

for (const fish of allTheFish) {
    console.log(fish);
}

import { FishList } from './Fish/FishList.js'

FishList();


import { useTips } from './Tips/TipDataProvider.js'
import { TipsList } from './Tips/TipList.js'

const allTheTips = useTips()

for (const tip of allTheTips) {
    console.log(tip)
}

TipsList()

import { useLocation } from './Locations/LocationDataProvider.js'
import { LocationList } from './Locations/LocationList.js'

const allTheLocations = useLocation()
for (const location of allTheLocations) {
    console.log(location)
}
LocationList()

import { useQuote } from './Quotes/QuoteDataProvider.js'
import { QuotesList } from './Quotes/QuoteList.js'


const allTheQuotes = useQuote() 
for (const quote of allTheQuotes) {
    console.log(quote)
}
QuotesList()