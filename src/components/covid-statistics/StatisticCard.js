import React from 'react';
import {
    Card,
    CardBody,
    Col,
    Row,
} from 'shards-react';
import { Chart } from 'react-google-charts';

import styles from './StatisticCard.module.css';

const StatisticCard = (props) => {
  const { covidByCountry } = props;
  // const defaultCovidImage = require('../../images/covid-19-default.png');
  
  return (
    <Row>
        {covidByCountry.map((country, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
            <Card small className='card-post card-post--1'>
                <div
                    className='card-post__image'
                >
                    <Chart
                        chartType='ColumnChart'
                        data={[
                            ['Cases', 'Recovered', 'Deaths', 'Active'],
                            [
                              country.cases.total || 0,
                              country.cases.recovered || 0,
                              country.deaths.total || 0,
                              country.cases.active || 0
                            ]
                        ]}
                        width='100%'
                        legendToggle
                    />
                </div>
                <CardBody>
                <h5 className={`card-title ${styles.cardTitle}`}>
                  {country.country}
                </h5>
                <div className='content'>
                    <Row>
                        <Col xs='5'><strong>Cases: </strong></Col>
                        <Col>{country.cases.total || 'No data'}</Col>
                    </Row>
                    <Row>
                        <Col xs='5'><strong>Active: </strong></Col>
                        <Col>{country.cases.active || 'No data'}</Col>
                    </Row>
                    <Row>
                        <Col xs='5'><strong>Recovered: </strong></Col>
                        <Col>{country.cases.recovered || 'No data'}</Col>
                    </Row>
                    <Row>
                        <Col xs='5'><strong>Deaths: </strong></Col>
                        <Col>{country.deaths.total || 'No data'}</Col>
                    </Row>
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
