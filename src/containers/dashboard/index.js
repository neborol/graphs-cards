import * as React from "react";
import styles from './dashboard.module.scss';

import { optionsConfig }  from './options';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import  ColorPicker  from '../../presenters/colorPicker';




class Dashboard extends React.Component {
  actionCard = null;
  state = {
    firstColor: '#21b22b',
    secondColor: '#af1c37',
    mmLabel1: 'Expand',
    mmLabel2: 'Expand',
    mmLabel3: 'Expand',
    mmLabel4: 'Expand',
    showMicroMenu1: false,
    showMicroMenu2: false,
    showMicroMenu3: false,
    showMicroMenu4: false,
    card1Style : {flexBasis: '60%', display: 'block'},
    card2Style : {flexBasis: '30%', display: 'block'},
    card3Style : {flexBasis: '45%', display: 'block'},
    card4Style : {flexBasis: '45%', display: 'block'},
  }

  setGraphColors = (color, spec) => {
    if (spec === 'first') {
      this.setState({
        ...this.state,
        firstColor: color
      });
    } else if (spec === 'second') {
      this.setState({
        ...this.state,
        secondColor: color
      });
    }
  }



  toggleMicorMenu = (cardNbr) => {
    if (cardNbr === 1) {
      this.setState({
        ...this.state,
        showMicroMenu1: !this.state.showMicroMenu1
      })
    } 
    else if (cardNbr === 2) {
      this.setState({
        ...this.state,
        showMicroMenu2: !this.state.showMicroMenu2
      })
    }
    else if (cardNbr === 3) {
      this.setState({
        ...this.state,
        showMicroMenu3: !this.state.showMicroMenu3
      })
    }
    else if (cardNbr === 4) {
      this.setState({
        ...this.state,
        showMicroMenu4: !this.state.showMicroMenu4
      })
    }
  }

  expandCard = (name) => {
    const expanded = {flexBasis: '100%', display: 'block'};
    const halfed = {flexBasis: '45%', display: 'block'};
    if (name === 'card1') {
      this.setState({
        ...this.state,
        mmLabel1: this.state.mmLabel1 === 'Expand' ? 'Contract' : 'Expand',
        showMicroMenu1: false,
        card1Style: this.state.card1Style.flexBasis === '60%' ? 
        expanded : {flexBasis: '60%', display: 'block'}
      })
    } 
    else if (name === 'card2') {
      this.setState({
        ...this.state,
        mmLabel2: this.state.mmLabel2 === 'Expand' ? 'Contract' : 'Expand',
        showMicroMenu2: false,
        card2Style: this.state.card2Style.flexBasis === '30%' ? 
        expanded : {flexBasis: '30%', display: 'block'}
      })
    }
     else if (name === 'card3') {
      this.setState({
        ...this.state,
        mmLabel3: this.state.mmLabel3 === 'Expand' ? 'Contract' : 'Expand',
        showMicroMenu3: false,
        card3Style: this.state.card3Style.flexBasis === '45%' ? 
        expanded : halfed
      })
    }     
    else if (name === 'card4') {
      this.setState({
        ...this.state,
        mmLabel4: this.state.mmLabel4 === 'Expand' ? 'Contract' : 'Expand',
        showMicroMenu4: false,
        card4Style: this.state.card4Style.flexBasis === '45%' ? 
        expanded : halfed
      })
    }
  }

  removeCard = (name) => {
    if (name === 'card1') {
      this.setState({
        ...this.state,
        card1Style: {flexBasis: '60%', display: 'none'}
      })
    } 
    else if (name === 'card2') {
      this.setState({
        ...this.state,
        card2Style: {flexBasis: '30%', display: 'none'}
      })
    }
     else if (name === 'card3') {
      this.setState({
        ...this.state,
        card3Style: {flexBasis: '45%', display: 'none'}
      })
    }     
    else if (name === 'card4') {
      this.setState({
        ...this.state,
        card4Style: {flexBasis: '45%', display: 'none'}
      })
    }
  }

  render() {

    const openMicroMenuContent = (name) => {
      let elabl;
      if(name === 'card1'){elabl = this.state.mmLabel1}
      if(name === 'card2'){elabl = this.state.mmLabel2}
      if(name === 'card3'){elabl = this.state.mmLabel3}
      if(name === 'card4'){elabl = this.state.mmLabel4}

      return (            
        <div className={styles.micromenu}>
          <div onClick={this.expandCard.bind(this, name)} className={styles.expandLink}>{elabl}</div>
          <div onClick={this.removeCard.bind(this, name)} className={styles.removeLink}>Remove</div>
        </div>
      );
    }


    let micro1 = this.state.showMicroMenu1 ? openMicroMenuContent('card1') : null;
    let micro2 = this.state.showMicroMenu2 ? openMicroMenuContent('card2') : null;
    let micro3 = this.state.showMicroMenu3 ? openMicroMenuContent('card3'): null;
    let micro4 = this.state.showMicroMenu4 ? openMicroMenuContent('card4') : null;
 
    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.dbTitle}><h3>Dashboard</h3></div>
        <div className={styles.cardsContainer}>
 
          <div style={this.state.card1Style} data-nm="card1" className={[styles.dboardcard, styles.card1].join(' ')}>
            <div onClick={ this.toggleMicorMenu.bind(this, 1)} className={styles.dotsMenu}></div>
              { micro1 }
            <div>
              <h3>Card 1</h3>
              <div className={styles.cardControl}></div>
            </div>
            <div>
              <ColorPicker changeCol={this.setGraphColors} />
            </div>
            <div className={styles.AreaChart}>
              <HighchartsReact highcharts={Highcharts} options={optionsConfig(this.state.firstColor, this.state.secondColor)} />
            </div>
          </div>


          <div style={this.state.card2Style} className={[styles.dboardcard, styles.card2].join(' ')}>
            <div onClick={ this.toggleMicorMenu.bind(this, 2)} className={styles.dotsMenu}></div>
            { micro2 }
            <div>
              <h3>Card 2</h3>
              <div className={styles.cardControl}></div>
            </div>
            <p className={styles.cardText}>Cart Content</p>
          </div>


          <div style={this.state.card3Style} className={[styles.dboardcard, styles.card3].join(' ')}>
            <div onClick={ this.toggleMicorMenu.bind(this, 3)} className={styles.dotsMenu}></div>
            { micro3 }
            <div>
              <h3>Card 3</h3>
              <div className={styles.cardControl}></div>
            </div>
            <p className={styles.cardText}>Cart Content</p>
          </div>


          <div style={this.state.card4Style} className={[styles.dboardcard, styles.card4].join(' ')}>
            <div onClick={ this.toggleMicorMenu.bind(this, 4)} className={styles.dotsMenu}></div>
            { micro4 }
            <div>
              <h3>Card 4</h3>
              <div className={styles.cardControl}></div>
            </div>
            <p className={styles.cardText}>Cart Content</p>
          </div>

      </div>
        
      </div>
    );
  }
}

export default Dashboard;
