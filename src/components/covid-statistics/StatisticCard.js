import React from 'react';
import {
    Card,
    CardBody,
    Col,
    Row,
} from 'shards-react';

import styles from './StatisticCard.module.css';

const StatisticCard = (props) => {
  const { covidByCountry } = props;
  const defaultCovidImage = require('../../images/covid-19-default.png');

  console.log('covidByCountry-->>', covidByCountry);

  return (
    <Row>
        {covidByCountry.map((country, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
            <Card small className='card-post card-post--1'>
                <div
                    className='card-post__image'
                    style={{ backgroundImage: `url(${defaultCovidImage})` }}
                >
                </div>
                <CardBody>
                <h5 className='card-title'>
                  {country.country}
                </h5>
                <div className='content'>
                    
                </div>
                <br></br>
                <div className={styles.authorDiv}>
                    <span className={`text-muted ${styles.creditsLabel}`}>
                      Credits to: covid-193.p.rapidapi.com <br></br>
                    </span>
                </div>
                </CardBody>
            </Card>
            </Col>
        ))}
    </Row>
  )
}

export default StatisticCard;
