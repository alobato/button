import React from 'react'
import styled, { css } from 'styled-components'

export const ButtonRaw = styled.button`
  line-height: 0;
  padding: 0;
  border: 0;
  background: transparent;
  appearance: none;
  cursor: pointer;
  position: relative;
  user-select: none;
  outline: none;
`

const Button = ({ children, loading, primary, small, ...rest}) => {
  return (
    <ButtonRaw {...rest}>
      <i>
        <svg height={16} viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'>
          <circle cx='50' cy='50' fill='none' stroke='currentColor' strokeWidth='10' r='35' strokeDasharray='164.93361431346415 56.97787143782138' transform='rotate(305.844 50 50)'>
            <animateTransform attributeName='transform' type='rotate' calcMode='linear' values='0 50 50;360 50 50' keyTimes='0;1' dur='1s' begin='0s' repeatCount='indefinite' />
          </circle>
        </svg>
      </i>
      <span style={{display: 'inline-block', pointerEvents: 'none'}}>
        {children}
      </span>
    </ButtonRaw>
  )
}

export default styled(Button)`
  font-family: ${props => (props.theme && props.theme.secondaryFontFamily) ? props.theme.secondaryFontFamily : 'inherit'};
  border-radius: 22px;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 32px;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  background: hsla(216, 40%, 55%, 1);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  color: ${props => props.theme.colors.white};
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  background-color: ${props => (props.theme && props.theme.color && props.theme.colors.primary) ? props.theme.colors.primary : 'hsla(207, 73%, 57%, 1)'};
  ${props => props.small && css`
    font-size: 15px;
    font-weight: 600;
    line-height: 16px;
    padding: 8px 24px;
  `}
  ${props => props.loading && css`
    background-color: ${props => (props.theme && props.theme.color && props.theme.colors.primary300) ? props.theme.colors.primary300 : 'hsla(203, 82%, 76%, 1)'};
    pointer-events: none;
  `}
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${props => (props.theme && props.theme.color && props.theme.colors.primary200) ? props.theme.colors.primary200 : 'hsla(202, 81%, 86%, 1)'};
    border: 1px solid ${props => (props.theme && props.theme.color && props.theme.colors.primary400) ? props.theme.colors.primary400 : 'hsla(205, 79%, 66%, 1)'};
  }
  &:disabled {
    background: ${props => (props.theme && props.theme.color && props.theme.colors.primary200) ? props.theme.colors.primary200 : 'hsla(202,  81%, 86%, 1)'};
    cursor: not-allowed;
  }
  & > i {
    display: inline-block;
    line-height: 0;
    pointer-events: none;

    vertical-align: -2px;
    opacity: 0;
    margin-left: -16px;
    transition: margin-left .3s cubic-bezier(.645, .045, .355, 1);

    ${props => props.loading && css`
      opacity: 1;
      margin-left: 0px;
      margin-right: 8px;
    `}
  }
`
