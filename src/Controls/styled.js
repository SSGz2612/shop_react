import styled from "styled-components";

// let First = "#5ece7b",
let Second = "#efefef",
Third = "#aaaaaa";

/** General Set **/

/** Nav **/
export const NavContent = styled.nav`
  position: fixed;
  background: white;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid ${ Second };
  z-index: 1;
`

export const NavContentBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
  height: 100%;
`

/** Main **/
export const Body = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  grid-gap: 20px;
  margin: auto;
  width: auto;
  max-width: 1440px;
  height: auto;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: auto;
  min-height: 450px;

  &:hover {
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`

export const ContentBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 15px 0px;
  width: 390px;
  height: auto;
`

export const ContentImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 400px;
`

export const Image = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${(props) => props.url });
  background-repeat: no-repeat;
  background-size: 320px;
  width: 320px;
  height: 100%;
`

export const ImageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.75);
  color: ${ Third };
  width: 100%;
  height: 100%;
`

export const AddItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 0px;
`