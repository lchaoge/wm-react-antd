import {createGlobalStyle} from 'styled-components';

export const MainGlobalStyled = createGlobalStyle `
  .f12{font-size:12px;}
  .f13{font-size:13px;}
  .f14{font-size:14px;}
  .f16{font-size:16px;}
  .f18{font-size:18px;}
  .f20{font-size:20px;}
  .f24{font-size:24px;}
  .fb{font-weight:bold;}
  .fn{font-weight:normal;}
  .t2{text-indent:2em;}
  .lh150{line-height:150%}
  .lh180{line-height:180%}
  .lh200{line-height:200%}
  .unl{text-decoration:underline;}
  .no_unl{text-decoration:none;}
  .tl{text-align:left;}
  .tc{text-align:center;}
  .tr{text-align:right;}
  .bc{margin-left:auto;margin-right:auto;}
  .fl{float:left;display:inline;}
  .fr{float:right;display:inline;}
  .cb{clear:both;}
  .cl{clear:left;}
  .cr{clear:right;}
  .vm{vertical-align:middle;}
  .pr{position:relative;}
  .pa{position:absolute;}
  .zoom{zoom:1}
  .hidden{visibility:hidden;}
  .none{display:none;}
  .i-block{display: inline-block;}
  .oh{overflow: hidden}
  .cursor{cursor: pointer}
  .w10{width:10px;}
  .w20{width:20px;}
  .w30{width:30px;}
  .w40{width:40px;}
  .w50{width:50px;}
  .w60{width:60px;}
  .w70{width:70px;}
  button.w70{min-width: 70px;}
  a.w70{min-width: 70px;}
  .w80{width:80px;}
  .w90{width:90px;}
  .w100{width:100px;}
  .w110{width:110px;}
  .w120{width:120px;}
  .w130{width:130px;}
  .w140{width:140px;}
  .w150{width:150px;}
  .w180{width:180px;}
  .w200{width:200px;}
  .w300{width:300px;}
  .w400{width:400px;}
  .w500{width:500px;}
  .w600{width:600px;}
  .w700{width:700px;}
  .w750{width:750px;}
  .w800{width:800px;}
  .w900{width:900px;}
  .mw10{min-width:10px !important;max-width:10px !important;}
  .mw20{min-width:20px !important;max-width:20px !important;}
  .mw30{min-width:30px !important;max-width:30px !important;}
  .mw40{min-width:40px !important;max-width:40px !important;}
  .mw45{min-width:45px !important;max-width:45px !important;}
  .mw50{min-width:50px !important;max-width:50px !important;}
  .mw60{min-width:60px !important;max-width:60px !important;}
  .mw70{min-width:70px !important;max-width:70px !important;}
  .mw75{min-width:75px !important;max-width: 75px !important;}
  .mw80{min-width:80px !important;max-width:80px !important;}
  .mw85{min-width:85px !important;max-width:85px !important;}
  .mw90{min-width:90px !important;max-width:90px !important;}
  .mw95{min-width:95px !important;max-width:95px !important;}
  .mw100{min-width:100px !important;max-width:100px !important;}
  .mw110{min-width:110px !important;max-width: 110px !important;}
  .mw115{min-width:115px !important;max-width:115px !important;}
  .mw120{min-width:120px !important;max-width:120px !important;}
  .mw130{min-width:130px !important;max-width:130px !important;}
  .mw140{min-width:140px !important;max-width:140px !important;}
  .mw160{min-width:160px !important;max-width:160px !important;}
  .mw180{min-width:180px !important;max-width:180px !important;}
  .mw200{min-width:200px !important;max-width:200px !important;}
  .w{width:100%}
  .w50x{width:50%;}
  .h50{height:50px;}
  .h80{height:80px;}
  .h100{height:100px;}
  .h200{height:200px;}
  .h300{height: 300px;}
  .mh425{min-height: 425px;}
  .h{height:100%}
  .m10{margin:10px;}
  .m15{margin:15px;}
  .m30{margin:30px;}
  .mt0{margin-top: 0;}
  .mt5{margin-top:5px;}
  .mt10{margin-top:10px;}
  .mt15{margin-top:15px;}
  .mt20{margin-top:20px;}
  .mt30{margin-top:30px;}
  .mt50{margin-top:50px;}
  .mt100{margin-top:100px;}
  .mb0{margin-bottom: 0;}
  .mb5{margin-bottom:5px;}
  .mb10{margin-bottom:10px;}
  .mb12{margin-bottom:12px;}
  .mb15{margin-bottom:15px;}
  .mb20{margin-bottom:20px;}
  .mb30{margin-bottom:30px;}
  .mb50{margin-bottom:50px;}
  .mb100{margin-bottom:100px;}
  .ml5{margin-left:5px;}
  .ml10{margin-left:10px;}
  .ml15{margin-left:15px;}
  .ml20{margin-left:20px;}
  .ml30{margin-left:30px;}
  .ml50{margin-left:50px;}
  .ml100{margin-left:100px;}
  .mr5{margin-right:5px;}
  .mr10{margin-right:10px;}
  .mr15{margin-right:15px;}
  .mr20{margin-right:20px;}
  .mr30{margin-right:30px;}
  .mr50{margin-right:50px;}
  .mr100{margin-right:100px;}
  .p10{padding:10px;}
  .pl0{padding-left:0px;}
  .p10{padding:10px;}
  .p15{padding:15px;}
  .p30{padding:30px;}
  .pt0{padding-top:0px;}
  .pt5{padding-top:5px;}
  .pt10{padding-top:10px;}
  .pt15{padding-top:15px;}
  .pt20{padding-top:20px;}
  .pt30{padding-top:30px;}
  .pt50{padding-top:50px;}
  .pt100{padding-top:100px;}
  .pb0{padding-bottom:0px;}
  .pb5{padding-bottom:5px;}
  .pb10{padding-bottom:10px;}
  .pb15{padding-bottom:15px;}
  .pb20{padding-bottom:20px;}
  .pb30{padding-bottom:30px;}
  .pb50{padding-bottom:50px;}
  .pb100{padding-bottom:100px;}
  .pl0{padding-left: 0}
  .pl5{padding-left:5px;}
  .pl10{padding-left:10px;}
  .pl15{padding-left:15px;}
  .pl20{padding-left:20px;}
  .pl30{padding-left:30px;}
  .pl50{padding-left:50px;}
  .pl100{padding-left:100px;}
  .pr0{padding-right:0px;}
  .pr5{padding-right:5px;}
  .pr10{padding-right:10px;}
  .pr15{padding-right:15px;}
  .pr20{padding-right:20px;}
  .pr30{padding-right:30px;}
  .pr50{padding-right:50px;}
  .pr100{padding-right:100px;}

  
`