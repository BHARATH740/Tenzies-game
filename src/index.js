import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Alert from './components/Alert';
import "./index.css"


ReactDOM.render(
  //   async promptUser = () => {
  //   const selection = await new Promise((resolve) => {
  //       const title = 'Time to choose!';
  //       const message = 'Please make your selection.';
  //       const buttons = [
  //           { text: 'Cancel', onPress: () => resolve(null) },
  //           { text: 'Option A', onPress: () => resolve('Option A') },
  //           { text: 'Option B', onPress: () => resolve('Option B') }
  //       ];
  //       Alert.alert(title, message, buttons);
  //   })
    
  //   if (selection) {
  //       this.setState({ userSelection: selection });
  //   }
  // },
  <main className='main'>
    <App />
    {/* <Alert /> */}
  </main>,
  document.getElementById('root')
);

