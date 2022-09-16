import styled from "styled-components"


const PageGrid = styled.div `
    display: grid;
    grid-template-rows: 70px 1fr;
`

const Margins = styled.div`
    display: grid;
    grid-template-columns: auto 1185px auto;
`

const CenterColumn = styled.div`
    grid-column: 2;
`

const ContentPadding = styled.div`
    margin-top: 50px;
`

// NavBar Layout
const NavGrid = styled.div`
    display: grid;
    grid-template-columns: 202.5px 195px 195px 195px 195px 202.5px;
`

// HomeContent.js - Component
const HomeRows = styled.div`
    display: grid;
    grid-template-rows: 80px 70px 615px 80px 2000px;
`

const PopularGamesGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 300px);
    grid-template-columns: repeat(5, 225px);
    gap: 15px;
    padding-bottom: 50px;

    img {
        height: 300px;
        width: auto;
        border-radius: 5px;
        outline: 2px solid grey
    }
`

const LatestReviewsGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 280px);
`

// GameLibrary.js - component
const LibraryRows = styled.div`
    display: grid;
    grid-template-rows: 80px 70px 1560px;


`
const GameLibraryGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 300px);
    grid-template-columns: repeat(5, 225px);
    gap: 15px;
    padding-bottom: 50px;

    img {
        height: 300px;
        width: auto;
        border-radius: 5px;
        outline: 2px solid grey
    }
`
// GameDetail.js - Component
const GameDetailRows = styled.div`
    display: grid;
    grid-template-rows: 460px 80px 1fr;
`
// GameDetail.hs - header (img/title & details)
const GameDetailGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`



export {PageGrid, Margins, CenterColumn, HomeRows, PopularGamesGrid, LatestReviewsGrid, NavGrid, ContentPadding, LibraryRows, GameLibraryGrid, GameDetailRows, GameDetailGrid}