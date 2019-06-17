import * as React from "react";
import styles from '../colorPicker.module.scss';
import { availableClasses, availableColors } from './colorsAndClasses';


class ColorPicker extends React.Component {
  state = {
    showFirstTray: false,
    showSecondTray: false,
    selectedIndexFirst: 0,
    selectedIndexSecond: 1
  }
    
  togglePickersTray = (type) => {
    if (type === 'first') {
      this.setState({
        ...this.state,
        showFirstTray: !this.state.showFirstTray,
      });
    } else if (type === 'second') {
      this.setState({
        ...this.state,
        showSecondTray: !this.state.showSecondTray
      });
    }
  }

  genRandom = () => {
    return availableClasses[Math.floor(Math.random() * availableClasses.length)];
  }

  handleColorChange = (idx, spec) => {
    this.props.changeCol(availableColors[idx], spec);
    if (spec === 'first') {
      this.setState({
        ...this.state,
        selectedIndexFirst: idx,
        showFirstTray: false
      });
    } else if (spec === 'second') {
        this.setState({
        ...this.state,
        selectedIndexSecond: idx,
        showSecondTray: false
      });
    }
  }

  render() {  

    let firstColorTray = null;
    let secondColorTray = null;

    const firstColorPickers = availableClasses.map((collr, idx) => {
        return (
            <li key={collr}>
                <span onClick={this.handleColorChange.bind(this, idx, 'first') }
                    className={[styles[collr], styles.picker].join(' ')}>
                </span>
            </li>
            );
    });  
    
    const secondColorPickers = availableClasses.map((collr, idx) => {
        return (
            <li key={collr}>
                <span onClick={ this.handleColorChange.bind(this, idx, 'second')}
                    className={[styles[collr], styles.picker].join(' ')}>
                </span>
            </li>
            );
    });  

    
   firstColorTray = this.state.showFirstTray ?  ( 
      <div className={styles.colorsContainer}>
        <ul className={styles.colorList}>
            { firstColorPickers }
        </ul>
      </div>
    ) : null;

   secondColorTray = this.state.showSecondTray ?  ( 
      <div className={styles.colorsContainer}>
        <ul className={styles.colorList}>
            { secondColorPickers }
        </ul>
      </div>
    ) : null;
    
    return (
      <div className={styles.ColorPicker}>
        <div className={[styles[availableClasses[this.state.selectedIndexFirst]], styles.firstPicker].join(' ')}>
            <div className={styles.centralize}>
                <span className={styles.titleBox}> First color Picker: </span>  
                <span onClick={ this.togglePickersTray.bind(this, 'first')} className={[styles[this.genRandom()], styles.picker].join(' ')}></span>
            </div>
             { firstColorTray } 
        </div>


        <div className={[styles[availableClasses[this.state.selectedIndexSecond]], styles.secondPicker].join(' ')}>
            <div className={styles.centralize}>
                <span className={styles.titleBox}>Second color Picker: </span> 
                <span  onClick={ this.togglePickersTray.bind(this, 'second')} className={[styles[this.genRandom()], styles.picker].join(' ')}></span>                
            </div>
            { secondColorTray } 
        </div>
      </div>
    );
  }
}

export default ColorPicker;