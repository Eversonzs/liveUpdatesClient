import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from 'shards-react';
import { NotificationManager } from 'react-notifications';
import ReactLoading from 'react-loading';

import styles from './modulesCss/CovidStatistics.module.css';
import PageTitle from '../components/common/PageTitle';
import StatisticCard from '../components/covid-statistics/StatisticCard';
import GetCovidStatistics from '../services/getCovidStatistics';

class CovidStatistics extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      covidByCountry: [],
      noData: true,
      loading: true,
    };
  }

  componentDidMount = () => {
    GetCovidStatistics()
      .then(response => {
        if (response.status === 200) {
          this.setState({
            covidByCountry: response.data.response,
            noData: false,
            loading: false,
          });
        }
      })
      .catch(error => {
        NotificationManager.error(error.message);
        this.setState({ noData: true, loading: false });
      })
  };

  render() {
    const {
      covidByCountry,
      noData,
      loading,
    } = this.state;

    return (
      <Container fluid className='main-content-container px-4'>
          {/* Page Header */}
          <Row noGutters className='page-header py-4'>
            <PageTitle sm='4' title='Covid Statistics' subtitle='World overview' className='text-sm-left' />
          </Row>
      { loading ?
        (
          <div className={styles.divElementsCenter}>
              <ReactLoading type='bars' color='#007bff' />
          </div>
        ) :
        noData ?
        (
          <Row>
            <Col lg='12' md='12' sm='12' className='mb-4'>
                <Card small className='card-post card-post--1'>
                  <CardBody>
                      <h5 className='card-title'>
                          <p>Covid statistics not found... </p>
                      </h5>
                      <br></br>
                  </CardBody>
                </Card>
            </Col>
          </Row>
        ) :
        (
          <StatisticCard 
            covidByCountry={covidByCountry}
          />
        )
      }
      </Container>
    );
  }
}

export default CovidStatistics;
