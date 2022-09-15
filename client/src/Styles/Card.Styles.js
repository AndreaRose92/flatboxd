import styled from "styled-components";

// HomeReviewCard styling
const HomeReviewCardStyling = styled.div`

    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    position: relative;

    img.game {
        height: 100px;
        width: auto;
        margin-top: 40px;
        margin-left: 20px;
        border-radius: 5px;
        outline: 2px solid grey
    }

    a.title {
        position: absolute;
        margin-left: 35px;
        margin-top: 10px;
        color: white;
        font-size: 2em;
        font-weight: bolder;
    }

    h3.content {
        margin-left: 130px;
        margin-top: -80px;
    }

    h3.completed{
        color: white;
        margin-right: 20px;
        margin-top: -80px;
        text-align: right;
    }

    a.profile {
        position: absolute;
        margin-left: 1100px;
        margin-top: 10px;
        width: 52px;
        height: 52px;
    }

    a.profileName {
        position: absolute;
        margin-left: 975px;
        color: white;
    }

    a img {
        margin-top: 30px;
    }

    a h4 {
        margin-top: 53px;
    }

    h3.created {
        color: grey;
        font-weight: lighter;
        margin-left: 130px;
        margin-top: 70px;
        width: 100px;
    }
    
    h3.reviewStats {
        margin-left: 810px;
        margin-top: -40px;
        font-weight: lighter;
    }

`

export {HomeReviewCardStyling}