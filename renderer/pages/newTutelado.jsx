import Head from "next/head"
import { Fragment } from "react"
import StepWizard from "react-step-wizard"
import Nav from "../components/Nav"
import Alumno from "../components/Alumno"
import SemestreAnterior from "../components/SemestreAnterior"
import Propositos from "../components/Propositos"
import Compromisos from "../components/Compromisos"
import Expectativas from "../components/Expectativas"
import NavStep from "../components/NavStep"

function newTutelado() {
  return (
    <Fragment>
      <Head>
        <title>Nuevo Tutelado</title>
      </Head>
      <div>
        <Nav />
        <div className="mx-2 mt-4">
          <StepWizard className="" nav={<NavStep />}>
            <Alumno />
            <SemestreAnterior />
            <Propositos />
            <Compromisos />
            <Expectativas />
          </StepWizard>
        </div>
      </div>
    </Fragment>
  )
}

export default newTutelado