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
      shadow={true}
      FontSize={20}
      FontWeight={400}
      showError={false}
      pad={8}
    />
  )
}

export default App
