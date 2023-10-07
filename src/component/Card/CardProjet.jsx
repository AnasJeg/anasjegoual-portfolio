import React from 'react';
import { Link } from 'react-router-dom';

export default function CardProjet(props) {
  const { disc, disc2, title, annee, lien } = props;

  const cardStyle = {
    width: '100%',
    maxWidth: '400px',
    marginBottom: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e0e0e0',
    borderRadius: '5px',
  };

  const cardHeaderStyle = {
    backgroundColor: '#F6F1E9',
    color: 'black',
    padding: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: '5px 5px 0 0',
  };

  const cardContentStyle = {
    padding: '16px',
  };

  const cardFooterStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    borderTop: '1px solid #e0e0e0',
    borderRadius: '0 0 5px 5px',
  };

  const listItemStyle = {
    marginBottom: '8px',
  };

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card" style={cardStyle}>
        <div className="card-header" style={cardHeaderStyle}>
          {title}
        </div>
        <div className="card-body" style={cardContentStyle}>
          <ul className="list-unstyled">
            <li style={listItemStyle}>
              <strong>Technologies utilisées:</strong> {disc.trim().split('\n').map((line, index) => (
                <span key={index}>{line.trim()}<br /></span>
              ))}
            </li>
            <li style={listItemStyle}>
              <strong>Description:</strong> {disc2.trim().split('\n').map((line, index) => (
                <span key={index}>{line.trim()}<br /></span>
              ))}
            </li>
          </ul>
        </div>
        <div className="card-footer" style={cardFooterStyle}>
          <div>
            <strong>Année:</strong> {annee}
          </div>
          <Link to={lien} className="btn btn-success">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
