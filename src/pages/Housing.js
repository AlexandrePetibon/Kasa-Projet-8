import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import data from "../data/data.json";
import { useParams } from 'react-router-dom';
import Collapse from 'components/Collapse';

const Housing = () => {
  const { id } = useParams();
  const selectedHousing = data.find((item) => item.id === id);

  return (
    <div>
      <Header />
      <div className='body-housing'>
        <img className='img-body-housing' src={selectedHousing.pictures[0]} alt={selectedHousing.title} />
        <div className='general-housing'>
          <div className='description-general'>
            <h1>{selectedHousing.title}</h1>
            <p>{selectedHousing.location}</p>
            <div className='tag-box'>
              {selectedHousing.tags.map((tag, index) => (
                <div key={index} className='tag'>
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className='identification-host'>
            <p>{selectedHousing.rating}</p>
            <div className='host-name-picture'>
              <p>{selectedHousing.host.name}</p>
              <img className="picture-host" src={selectedHousing.host.picture} alt={selectedHousing.host.name} />
            </div>
          </div>
        </div>
        <div className='collapse-housing'>
          <Collapse
            title="Description"
            content={selectedHousing.description}
          />
          <Collapse
            title="Equipements"
            content={selectedHousing.equipments.join(', ')}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Housing;