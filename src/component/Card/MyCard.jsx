import React from 'react';
import { Card } from 'primereact/card';

export default function MyCard(props) {
  const { Icon, disc, title, subtitle } = props;
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  };

  const header = (
    <img
      alt="Card"
      src={Icon}
      style={{ height: 'auto', maxWidth: '50%', alignSelf: 'center' }}
    />
  );

  return (
    <div className="card flex justify-content-center" style={{ height: '100%' }}>
      <Card title={title} subTitle={subtitle} header={header} style={cardStyle}>
        <div
          className="card-content"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            padding: '1rem',
          }}
        >
          <p className="m-0">{disc}</p>
        </div>
      </Card>
    </div>
  );
}
