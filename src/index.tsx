import * as React from 'react'
import styles from './styles.module.css'
// @ts-ignore
import styled from 'styled-components'

interface Props {
  placeHolder: string
  type: string
  isBorder: boolean
  isFilled: boolean
  isUnderlined: boolean
  shadow: boolean
  FontSize: number
  FontWeight: number
  showError: boolean
  pad: number
}

export const InputComponent = ({
  placeHolder,
  type,
  isBorder,
  isFilled,
  isUnderlined,
  shadow,
  FontSize,
  FontWeight,
  showError,
  pad
}: Props) => {
  let Input = null
  const InpField = styled.input`
    display: inline;
    font-size: ${FontSize}px;
    font-weight: ${FontWeight};
    padding: ${pad}px;
  `
  const Label = styled.label`
    padding: ${pad}px 0;
    position: relative;
  `;
  isBorder
    ? (Input = (
        <Label className={styles.inputField}>
          <InpField
            type={type}
            className={`${styles.inputBordered} ${
              shadow ? styles.shadow : ' '
            } ${showError ? styles.error : ' '}`}
            required
          />
          {showError ? <span className={styles.spanError}>Error</span> : ' '}
          <span className={styles.placeHolder}>{placeHolder}</span>
        </Label>
      ))
    : null
  isFilled
    ? (Input = (
        <label className={styles.inputField}>
          <InpField
            type={type}
            className={`${styles.inputFilled} ${shadow ? styles.shadow : ' '}`}
            required
          />
          <span className={styles.placeHolder}>{placeHolder}</span>
        </label>
      ))
    : null
  isUnderlined
    ? (Input = (
        <label className={styles.inputField}>
          <InpField
            type={type}
            className={`${styles.inputUnderline} ${
              shadow ? styles.shadow : ' '
            }`}
            required
          />
          <span className={styles.placeHolder}>{placeHolder}</span>
        </label>
      ))
    : null
  return <div>{Input}</div>
}
