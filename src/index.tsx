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
  isNeomorphic: boolean
  shadow: boolean
  FontSize: number
  FontWeight: number
  showError: boolean
  pad: number
  borderColor: string
  bgColor: string
  FontColor: string
  ErrorText: string
}

export const InputComponent = ({
  placeHolder,
  type,
  isBorder,
  isFilled,
  isUnderlined,
  isNeomorphic,
  shadow,
  FontSize,
  FontWeight,
  showError,
  pad,
  borderColor,
  bgColor,
  FontColor,
  ErrorText
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
    color: ${FontColor};
  `
  const FilledInput = styled.input`
    background-color: ${bgColor};
    border-color: ${borderColor};
    color: ${FontColor};
    display: inline;
    font-size: ${FontSize}px;
    font-weight: ${FontWeight};
    padding: ${pad}px;
  `
  const BorderedInput = styled.input`
    border-color: ${borderColor};
    background-color: ${bgColor};
    display: inline;
    font-size: ${FontSize}px;
    font-weight: ${FontWeight};
    padding: ${pad}px;
  `
  isBorder
    ? (Input = (
        <Label className={styles.inputField}>
          <BorderedInput
            type={type}
            className={`${styles.inputBordered} ${
              shadow ? styles.shadow : ' '
            } ${showError ? styles.error : ' '}`}
            required
          />
          <span className={styles.placeHolder}>{placeHolder}</span>
          {showError ? (
            <span className={styles.spanError}>
              <i className='fas fa-exclamation'></i>
              {ErrorText}
            </span>
          ) : (
            ' '
          )}
        </Label>
      ))
    : null
  isFilled
    ? (Input = (
        <label className={styles.inputField}>
          <FilledInput
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
  isNeomorphic
    ? (Input = (
        <div className={styles.inputContainer}>
          <input
            type='text'
            className={styles.inputNeo}
            placeholder={placeHolder}
          />
        </div>
      ))
    : null
  return <div>{Input}</div>
}
