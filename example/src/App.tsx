import React from 'react'

import { InputComponent } from 'input'
import 'input/dist/index.css'

const App = () => {
  return (
    <InputComponent
      placeHolder='hello'
      type='text'
      isBorder={true}
      isFilled={false}
      isUnderlined={false}
      isNeomorphic={false}
      shadow={true}
      FontSize={20}
      FontWeight={400}
      showError={true}
      pad={8}
      bgColor={'#888'}
      borderColor={'#000'}
      FontColor={'#fff'}
      ErrorText={'limit exceded'}
    />
  )
}

export default App
