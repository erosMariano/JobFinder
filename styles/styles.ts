
import styled from "styled-components";


export const Container = styled.main`
  height: 100vh;
  background: #000000;
  color: #fff;

  text-align: center;
  padding-bottom: 108px;
  .eclipe-left{
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    overflow: hidden;
    width: 100%;
  }

  .eclipe-direita{
    position: absolute;
    right: 0;
    bottom: 0;
    pointer-events: none;
    width: 100%;
  }


  .containerImagem{
    overflow: hidden;
    width: 200px;
    height: 200px;
    position: absolute;
    right: 0px;
    bottom: 0px;
    pointer-events: none;
  }
  .eclipe-solida-top{
    position: absolute;
    left: -57px;
    animation: .2s eclipseSolidoTop linear forwards;
  }
  .eclipe-solida-bottom{
    position: absolute;
    animation: .2s eclipseSolidoBottom linear forwards;
    right: 0px;
    bottom: 0px;
  }
  
  @keyframes eclipseSolidoTop{
    0%{
      transform: scale(2.5);  
      top: 0px;    
    }100%{
      transform: scale(1);
        top: 100px;
    }
  }

    @keyframes eclipseSolidoBottom{
    0%{
      transform: scale(2.5);  
    }100%{
      transform: scale(1);
    }
  }
`
interface PropsContainer__image {
  widthImagemProps: number;
  PropsAnimated: boolean;
}
export const Container__image = styled.div<PropsContainer__image>`

  padding-top: ${(props) => props.PropsAnimated ? "100px" : "50px"};
  width: ${(props) => props.widthImagemProps}px  !important;
  transition: all .5s;
  margin-left: auto;
  margin-right: auto;

  position: relative;
  
  #cuboLaranja, #cuboPreto, #carinha{
    position: absolute;
  }
  #carinha{
    top: ${(props) => props.PropsAnimated ? "150px" : "68px"};
    right: ${(props) => props.PropsAnimated ? "10px" : "4px"};
    width: 15%;
    animation: 1.5s ${(props) => props.PropsAnimated ? "animationBoneco" : ""} infinite forwards;
    transition: all .5s;

  }

  #cuboLaranja{
    right: ${(props) => props.PropsAnimated ? "50px" : "22px"};
    top: ${(props) => props.PropsAnimated ? "60px" : "28px"};
    width: 15%;
    animation: 1s ${(props) => props.PropsAnimated ? "animationBoneco" : ""} infinite forwards;
    transition: all .5s;



  }
  #cuboPreto{
    width: 13%;
    animation: 1.8s ${(props) => props.PropsAnimated ? "animationBoneco" : ""} infinite forwards;
    transition: all .5s;

    top: ${(props) => props.PropsAnimated ? "125px" : "60px"};
    left: ${(props) => props.PropsAnimated ? "10px" : "10px"};

  }
  #personagem{
    width: 80%;
    animation: 2s ${(props) => props.PropsAnimated ? "animationBoneco" : ""} infinite forwards;
    transition: all .5s;
  }

  
 @keyframes animationBoneco {
    0%{
      transform: translateY(5px);
    }50%{
      transform: translateY(0px);
    }
    100%{
      transform: translateY(5px);
    }
 } 
`




export const Container__Text = styled.div`
  padding: 0 16px;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  /* or 129% */

  text-align: center;
  letter-spacing: 0.232836px;

  color: #FFFFFF;
  span{ color: #FF4E25;}

  margin-top: 50px;
`

export const ButtonHome = styled.div`
  margin-top: 24px;
  margin-bottom: 35px;
`

export const LinkParaEmpresa = styled.a`
  color: rgba(255, 255, 255, 0.75);
  font-size: 12px;
`

export const Title2 = styled.h2`
    font-weight: 700;
    font-size: 40px;
    line-height: 45px;
    /* or 112% */

  text-align: center;
  letter-spacing: 0.232836px;

  color: #FFFFFF;


  margin-top: 50px;
`

export const SubtitlePaginaDois = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  /* or 150% */

  text-align: center;
  letter-spacing: 1px;

  color: #9B9B9B;
  width: 285px;
  margin: 0 auto;
  margin-top: 8px;
`

export const Form = styled.form`

  width: 332px;
  margin: 0 auto;
  margin-top: 43px;

  label:nth-child(1){
    border-bottom: none;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  label:nth-child(2){
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  label{
    position: relative;
    display: block;
    background-color: #42424233;
    border: 2px solid #414141;
    height: 55px;

    display: flex;
    align-items: center;
  }

  span{
    margin-left: 14px;
    margin-right: 15.1px;
  }
  input{
    background: none;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    color: #9B9B9B;


    ::placeholder{
      color: #9B9B9B;
    }
  }

  #eye{
    height: 100%;
    display:flex;
    align-items: center;
    cursor: pointer;
  }
`

export const ResetPassword = styled.div`

  text-align: right;
  width: 332px;
  margin: 0 auto;
  margin-top: 26px;
  margin-bottom: 32px;
  a{
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    /* identical to box height, or 12px */

    letter-spacing: 1px;

    color: #9B9B9B;

  }
`

export const ButtonHome2 = styled.div`
  margin-top: 24px;
  margin-bottom: 46px;

    position:relative;

`

export const NotAccount = styled.div`
  a{
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    /* identical to box height, or 12px */

    text-align: center;
    letter-spacing: 1px;

    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    margin-right: 8px;
  }
`

export const ArrowHome = styled.span`
  position:relative;

  margin-left: 8px;
  position:relative;
  top: 1.5px;
`