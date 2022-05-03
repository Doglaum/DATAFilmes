import styled from 'styled-components'

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4rem;
  border-bottom: 1px solid rgb(18, 101, 255);
  height: 150px;

`

export const Nav = styled.nav`
  ul {
    display: flex;
    gap: 10px;
  }

  ul li {
    position: relative;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 40px;
    border-radius: 12px;
    transition: all ease 0.5s;
  }

  ul li:hover{
    cursor: pointer;
  }

  ul li:before{
    position: absolute;
    z-index: -1;
    opacity: 0;
    left: 1;
    border-radius: 12px;
    content: '';
    width: 0;
    height: 100%;
    background-color: rgb(18, 101, 255);
    transition: all ease 0.7s;
  }

  ul li:hover::before{
    opacity: 1;
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: -7px;
  text-transform: uppercase;

  span{
    margin-left: 5px;
    letter-spacing: 2px;
    text-transform: lowercase;
  }
`
export const Text = styled.span`
  color: rgb(18, 101, 255);
`
