import styled from 'styled-components'

export const Head = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 4rem;
  border-bottom: 1px solid rgb(18, 101, 255);
  height: 150px;

  a {
    text-decoration: none;
    color: white;
    border-radius: 1rem;
    background-color: rgb(18, 101, 255);
    padding: 10px 45px;
    transition: all ease 0.5s;
  }
  a:hover {
    background-color: rgb(119, 163, 245);
  }

  @media (max-width: 655px) {
    flex-direction: column;
  }

  @media (max-width:365px){
    font-size: 10px;
}
`
export const Title = styled.h1`
  font-size: 4rem;
  letter-spacing: -7px;
  text-transform: uppercase;

  @media (max-width: 655px) {
    font-size: 3.5rem;
  }

  

  span {
    color: rgb(18, 101, 255);
    margin-left: 5px;
    letter-spacing: 2px;
    text-transform: lowercase;
  }
`

// export const Nav = styled.nav`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 3rem;

//   ul {
//     display: flex;
//     max-width: 50%;
//     background-color: rgb(18, 101, 255);
//     border-radius: 12px;
//   }

//   ul li {
//     position: relative;
//     font-size: 1.2rem;
//     font-weight: 500;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 300px;
//     height: 40px;
//     transition: all ease 0.5s;
//   }

//   ul li:first-child:hover {
//     cursor: pointer;
//     background-color: rgb(111, 126, 244);
//     border-radius: 12px 0 0 12px;
//   }

//   ul li:nth-child(2):hover {
//     border-radius: 0;
//     cursor: pointer;
//     background-color: rgb(111, 126, 244);
//   }

//   ul li:nth-child(3):hover {
//     cursor: pointer;
//     background-color: rgb(111, 126, 244);
//     border-radius: 0 12px 12px 0;
//   }
//   ul li:before {
//     position: absolute;
//     z-index: -1;
//     visibility: hidden;
//     left: 1;
//     border-radius: 12px;
//     content: '';
//     width: 0;
//     height: 100%;
//     background-color: rgb(18, 101, 255);
//     transition: all ease 0.7s;
//   }

//   ul li:hover::before {
//     visibility: visible;
//     width: 100%;
//   }
// `
