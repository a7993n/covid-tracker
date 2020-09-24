import React from 'react';
import styles from './App.module.css';
import { Cards, Chart, Country } from './components';
import covidImg from './image/covid-logo.png';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={covidImg} className={styles.image} alt="COVID-19" />
        <Cards data={data} />
        <Country handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <div dangerouslySetInnerHTML='<script data-ad-client=" ca-pub-4511574107741478" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' >
          <div id="scriptTarget" />
          <div className="main">
          </div>
        </div>
      </div >

    );
  }
}

export default App;
