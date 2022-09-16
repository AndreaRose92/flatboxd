import styled from "styled-components";

const HomeStyles = styled.div`
    h1 {
        text-align: center;
        background-color: #131417;
        padding: 10px;
    }
`

const LibraryStyles = styled.div`
    h1 {
        text-align: center;
        background-color: #131417;
        padding: 10px;
    }
`

const GameDetailHeader = styled.div`
    h2, h1 {
        margin-left: 300px;
    } 

    h1.title {
        margin-left: 0px;
    }

    div {
        margin-top: -380px;
    }

    h2 {
        font-weight: lighter;
    }

    div h1 {
        font-weight: light;
    }

    img {
        height: 352px;
        width: auto;
        border-radius: 10px;
        outline: 2px solid grey
    }


`

export {HomeStyles, LibraryStyles, GameDetailHeader}