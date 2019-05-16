import styled from 'styled-components';
import logoPic from '../../static/images/logo.2.png'

export const LayoutWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  .ant-layout {
    position: relative;
    width: 100%;
    height: 100%;
    .wm-header{
      background: #ffffff;
      padding: 0;
      height: 55px;
      line-height: 55px;
      .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
        &::hover {
          color: #1890ff;
        }
      }
    }
    .wm-content{
      margin: 24px 24px;
      minHeight: 280px;
    }
  }
`;
export const UserInfo = styled.div`
  float:right;
  padding-right: 24px;
`;
export const UserName = styled.span`
  display: inline-block;
  margin-right: 10px;
  line-height: 40px;
  height: 40px;
  font-size:18px;
  font-weight:400;
  color:#3C3C3C;
  vertical-align: middle;
`
export const WMLogo = styled.div`
  height: 32px;
  background: url(${logoPic}) no-repeat;
  background-size:contain;
  margin: 16px;
`;