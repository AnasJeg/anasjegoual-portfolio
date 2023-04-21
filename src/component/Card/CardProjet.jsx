import React from 'react'; 
import { Card } from 'primereact/card';

export default function CardProjet(props) {
    const { disc, title,subtitle } = props;
    return (
          <div >
          <main className=" bg-white px-10  md:px-20  mt-5 " >
              <section className="min-h-screen">
                  <div className="mt-5">
                      <Card  >
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              <h4>{title}</h4>
                          </div>
                          <p className="text-center font-semibold mt-5" >
                          <span className="text-teal-500"> {subtitle} </span>
                              </p>
                          <p className="text-center font-semibold mt-5" >
                              {disc}
                          </p>
                      </Card>
                  </div>
              </section>
          </main>
      </div>
    )
}