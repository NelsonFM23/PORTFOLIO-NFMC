import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks =[
            {
                name:"Github",
                link:"https://github.com/NelsonFM23",
                logo:logoGithub,
            },
            {
                name:"Linkedind",
                link:"https://www.linkedin.com/in/francisco-moreno-3500bb243/",
                logo:logoLinkeind,
            },
            {
                name:"Youtube",
                link:"https://www.youtube.com/channel/UCOZu2LOLyXA5Sjqvr3M_GsQ",
                logo:logoYoutube,
            },
        ];

        return (
            <S.ContainerAboutMe id="about-me">
                <S.ContainerFlex>
                    <S.ContainerText>
                        <S.Title>
                            <p>👋🏼 Hello, i'm</p>
                            <p>NELSON F MORENO</p>
                            <p>MULTIVERSE DESIGNER</p>
                        </S.Title>
                        <S.DescriptionText>
                        ARQUITECTO PROFESIONAL UNIVERSIDAD CATOLICA COLOMBIA, 
                        TECNOLOGO EN DISEÑO INDUSTRIAL CORUNIVERSITEC BOGOTA, 
                        ESTUDIANTE TECNOLOGIA ANIMACION 3D SENA.
                        10 AÑOS EXPERIENCIA 
                        </S.DescriptionText>
                        <S.ContainerIcons>
                        {socialNetworks.map((network, index)=>(
                            <a
                                key={index}
                                href={network.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={network.logo} alt={network.name}/>
                            </a>
                        ))}
                    </S.ContainerIcons>
                    </S.ContainerText>
                    <S.ContainerImage>
                        <img src="/img/Logo.png" alt="Iván Devia - Backend Developer"/>
                    </S.ContainerImage>
                </S.ContainerFlex>
            </S.ContainerAboutMe>
        );
};


export default AboutMe;