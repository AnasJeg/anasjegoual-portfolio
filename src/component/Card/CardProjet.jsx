import React from 'react';
import { Card } from 'primereact/card';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export default function CardProjet(props) {
  const { disc, title, annee, lien } = props;

  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Link
        style={{ textDecoration: "none", color: "black", fontFamily: "better" }}
        to={lien}
      >
        <Button icon="pi pi-search" rounded text raised severity="success" aria-label="Search" />
      </Link>
    </div>
  );

  return (
    <div className="flex flex-wrap mx-4">
      <div className="w-full md:w-1/3 px-4 mt-5">
        <Card
          className="md:w-55rem h-full"
          title={<div className="card-title">{title}</div>}
          subTitle={annee}
          footer={footer}
        >
          <p className="m-0">{disc}</p>
        </Card>
      </div>
    </div>
  );
}
