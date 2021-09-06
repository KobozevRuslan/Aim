import styled from 'styled-components';

import {Decimal, Green, Nobel, Red} from '../../../assets/colors/colors';

import mail from '../../../assets/image/mail.png';
import lock from '../../../assets/image/lock.png';
import error from '../../../assets/image/error.png'
import done from  '../../../assets/image/done.png'

export const InputWrapper = styled.div`
  position: relative;
  
  input {
    outline: none;
    font-size: 14px;
    margin-top: 34px;
    width: 350px;
    border-radius: 5.51px;
    border: 1px solid ${Nobel};
    padding: 15px 0 15px 40px;
    color: ${Decimal};
  }

  input.done {
    border: 2px solid ${Green};
  }
  
  .error_message {
    color: ${Red};
    position: absolute;
    margin-top: 5px;
  }
`

export const InputImage = styled.img.attrs(props => ({
  src: props.inputImage ? mail : lock
}))`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50px;
  bottom: 0;
  left: 15px;
  right: 0;
`

export const Image = styled.img.attrs(props => ({
  src: props.status ? done : error
}))`
  margin-left: 10px;
  width: ${props => props.status ? '13px': ''};
  height: ${props => props.status ? '13px': ''};
`
