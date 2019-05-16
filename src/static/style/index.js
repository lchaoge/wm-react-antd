import React, { Fragment } from 'react';
import { MainGlobalStyled } from './main'
import { IconfontGlobalStyled } from './iconfont'
import { ResetGlobalStyled } from './reset'

const Styled = () => (
  <Fragment>
    <ResetGlobalStyled />
    <MainGlobalStyled />
    <IconfontGlobalStyled />
  </Fragment>
)
export default Styled;