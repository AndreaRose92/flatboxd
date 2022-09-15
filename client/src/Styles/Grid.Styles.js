import styled from "styled-components"


const PageGrid = styled.div `
    display: grid;
    grid-template-rows: 125px 1fr;
`

const Margins = styled.div`
    display: grid;
    grid-template-columns: auto 1185px auto;
`

const CenterColumn = styled.div`
    grid-column: 2;
`

// HomeContent.js - Component
const HomeRows = styled.div`
    display: grid;
    grid-template-rows: 150px 100px 615px 100px 2000px;
`

const PopularGamesGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 300px);
    grid-template-columns: repeat(5, 225px);
    gap: 15px;

    img {
        height: 300px;
        width: auto;
    }
`

const LatestReviewsGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 180px);
`


export {PageGrid, Margins, CenterColumn, HomeRows, PopularGamesGrid, LatestReviewsGrid}