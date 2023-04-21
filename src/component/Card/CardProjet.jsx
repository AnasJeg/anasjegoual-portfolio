import React from 'react'; 
import { Card } from 'primereact/card';

export default function CardProjet(props) {
    const { Icon, disc, title,subtitle } = props;
    const header = (
        <img alt="Card" src={Icon} style={{ height: 200 }}/>
    );
    return (
        <div className="card flex justify-content-center">
            <Card title={title} subTitle={subtitle} header={header} className="md:w-25rem"  style={{ height: 480}}>
                <p className="m-0">
                   {disc} </p>
            </Card>
        </div>
    )
}