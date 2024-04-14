export type QueryParams = {
    query: string
    page: number
    limit: number
    year: string
    country: string
    rate: number
}

type Backdrop = {
    url: string
    previewUrl: string
}

type Name = {
    name: string
    language: string
    type: string | null
}

type Poster = {
    previewUrl: string
    url: string
}

type Rating = {
    kp: number
    imdb: number
    filmCritics: number
    russianFilmCritics: number
    await: null
}

type Votes = {
    await: number
    filmCritics: number
    imdb: number
    kp: number
    russianFilmCritics: number
}

export type Movie = {
    ageRating: number
    alternativeName: string
    backdrop: Backdrop
    countries: {
        name: string
    }[]
    description: string
    enName: null
    genres: {
        name: string
    }[]
    id: number
    isSeries: boolean
    logo: {
        url: string
    }
    movieLength: number
    name: string
    names: Name[]
    poster: Poster
    rating: Rating
    ratingMpaa: string
    seriesLength: null
    shortDescription: string
    status: null
    ticketsOnSale: boolean
    top10: number | null
    top250: number | null
    totalSeriesLength: null
    type: string
    typeNumber: number
    votes: Votes
    filmCritics: number
    imdb: number
    kp: number
    russianFilmCritics: number
    year: number
    persons: Person[]
    similarMovies: SimilarMovie[]
    seasonsInfo: SeasonInfo[]
}

type Person = {
    description: string
    enName: string
    enProfession: string
    id: number
    name: string
    photo: string
    profession: string
}

type SeasonInfo = {
    episodesCount: number
    number: number
}

export type SimilarMovie = {
    alternativeName: string
    enName: null
    id: number
    name: string
    poster: Poster
    type: string
}

export type ResponseMovies = {
    docs: Movie[]
    limit: number
    page: number
    pages: number
    total: number
}
