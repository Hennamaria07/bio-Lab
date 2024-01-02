import React from 'react'
import { collab } from '../data/Data'
import { Card } from 'react-bootstrap'

export const Collab = () => {
  return (
    <>
        <div className="container">
      <div className="row">
        <div className="col card-wrapper d-flex flex-wrap">
        {collab.map((collaboration, index) => (
        <Card key={index} style={{ width: '18rem', marginBottom: '20px' }}>
          <Card.Body>
            <Card.Title>{collaboration.title}</Card.Title>
            <ul>
              {Object.values(collaboration.members).map((member, i) => (
                <li style={{listStyle: "none"}} key={i}>{member}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      ))}
        </div>
      </div>
    </div>
    </>
  )
}
