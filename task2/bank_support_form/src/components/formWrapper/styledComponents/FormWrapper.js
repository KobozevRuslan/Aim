import styled from 'styled-components';

import {DarkOrchid, Decimal, ModerateCyan, Nobel, White} from '../../../assets/colors/colors';

export const MainFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  
  .title {
    display: flex;
    align-items: baseline;
    margin: 0 0 34px 40px;
    color: ${Decimal};

    h1 {
      color: ${DarkOrchid};
      margin-right: 5px;
    }
  }

  .main_item_wrapper {
    border: 1px solid ${Nobel};
    width: 440px;
    border-radius: 5.51px;
    padding: 0 0 34px 40px;

    button {
      margin: 40px 0 20px 0;
      padding: 10px 20px;
      font-size: 18px;
      background: ${ModerateCyan};
      color: ${White};
      border-radius: 5px;
      outline: none;
      border: none;
      letter-spacing: -0.18px;
      cursor: pointer;
    }

    .item_info {
      font-size: 12px;
      color: ${Decimal};
      letter-spacing: -0.12px;

      a {
        padding-left: 3px;
        text-decoration: none;
        color: ${DarkOrchid};
      }
    }
  }
`
