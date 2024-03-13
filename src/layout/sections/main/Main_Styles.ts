import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
  min-height: 100vh;
  background-color: antiquewhite;
  display: flex;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 270px;
    height: 300px;
    border: 5px solid ${theme.colors.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;

    @media ${theme.media.mobile} {
      width: 210px;
      height: 240px;
      top: -17px;
      left: 20px;
    }
  }

  @media ${theme.media.mobile} {
    margin-top: 65px;
  }
}
`

const Photo = styled.img`
  width: 270px;
  height: 300px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 220px;
    height: 250px;
  }
`

const MainTitle = styled.h1`
  p {
    display: none;
  }
  
  font-size: 30px;
  font-weight: 400;
  ${font({
    Fmax: 27, Fmin: 20,
    weight: 400,
})}


`

const Name = styled.h2`
  ${font({family: "'Josefin Sans', sans-serif",
    Fmax: 60, Fmin: 56,
    weight: 700,
})}
  letter-spacing: 0.05rem;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
  
  @media ${theme.media.mobile} {
    margin: 15px 0 22px;
  }
`

const Congrats = styled.h2`
  font-size: 18px;
  font-weight: 400;
`
export const S = {
    Main,
    PhotoWrapper,
    Photo,
    MainTitle,
    Name,
    Congrats
}