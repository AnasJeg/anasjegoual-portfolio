import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function FormCard(props) {
    const { Icon, disc, title,subtitle } = props;
    return (
    /*    <div className="card flex justify-content-center">
            <Card title={title} subTitle={subtitle} header={header} className="md:w-25rem"  style={{ height: 480}}>
                <p>
                    {disc}
                </p>
            </Card>
        </div> */
          <div >
          <main className=" bg-white px-10  md:px-20  mt-5 " >
              <section className="min-h-screen">
                  <div className="mt-5">
                      <Card  >
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                              <img alt="logo" src={Icon} height="100" width="150" className="p-mr-2" />
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