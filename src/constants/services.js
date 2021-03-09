import React from "react"
import { FaCode, FaDatabase, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Programación Full Stack",
    text: `Analisis, diseño y programacion de paginas, programas, servicios y herramientas que aporten valor y sirvan de solucion o mejora a los procesos de su empresa.`,
  },
  {
    id: 2,
    icon: <FaDatabase className="service-icon" />,
    title: "Bases de datos",
    text: `Administracion, Diseño, configuración y mantenimiento de bases de datos relacionales como SQL, Mysql, Postgre y no relacionales como MongoDB.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Aplicaciones Moviles",
    text: `Diseño de aplicaciones moviles hibridas que permiten el desarrollo de aplicaciones tanto como para IOS o Android con un solo código`,
  },
]
