import { Card } from 'primereact/card'
import React from 'react'
import este from "../../image/este.png"
import emsi from "../../image/emsi.png"

export default function Formations() {
    return (
        <div >
            <main className=" bg-white px-10  md:px-20  mt-5 " >
                <section className="min-h-screen">

                    <div className="mt-5">
                        <h3 className="text-4xl py-1  text-center  font-burtons ">Formations :</h3>
                        <Card>

                            <p className="text-center font-medium mt-5" >
                                Thanks to self education and these two establishments, I have a strong educational background in computer science.

                            </p>
                        </Card>
                    </div>
                    <div className="mt-5">
                        <Card  >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                <img alt="logo" src={emsi} height="30" width="100" className="p-mr-2" />
                            </div>
                            <p className="text-center font-semibold mt-5" >
                                I am closer to complete my engineering education at <span className="text-teal-500"> EMSI </span> School,
                            </p>
                            <p className="text-center font-semibold mt-5" >
                                where I deepened my understanding of computer architecture,
                            </p>
                            <p className="text-center font-semibold mt-5" >
                                operating systems, and databases.
                            </p>
                        </Card>
                    </div>
                    <div className="mt-5">
                        <Card  >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                <img alt="logo" src={este} height="100" width="150" className="p-mr-2" />
                                <h4> Licence Professionnelle (LP) - Ingénieriedes Systemes Informatiques Et Logiciels</h4>
                            </div>
                            <p className="text-center font-semibold mt-5" >
                                I obtained my bachelor s degree in Computer Science from the<span className="text-teal-500"> FST </span>  University,</p>
                            <p className="text-center font-semibold mt-5" >
                                where I gained a solid foundation in programming languages, and algorithms.
                            </p>
                        </Card>
                    </div>
                    <div className="mt-5">
                        <Card  >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                <img alt="logo" src={este} height="100" width="150" className="p-mr-2" />
                                <h4>DIPLÔME UNIVERSITAIRE DE TECHNOLOGIE (DUT)</h4>
                            </div>
                            <p className="text-center font-semibold mt-5" >
                                I obtained my bachelor s degree in Computer Science from the<span className="text-teal-500"> ESTE </span></p>
                            <p className="text-center font-semibold mt-5" >
                                where I gained a solid foundation in programming languages, and algorithms.
                            </p>
                        </Card>
                    </div>
                </section>

            </main>
        </div>
    )
}
