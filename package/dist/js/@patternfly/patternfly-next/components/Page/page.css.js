const { StyleSheet } = require('@patternfly/react-styles');
module.exports = StyleSheet.parse(`.pf-c-page__header,.pf-c-page__main-section[class*="pf-m-dark-"]{--pf-global--Color--100:var(--pf-global--Color--light-100);--pf-global--Color--200:var(--pf-global--Color--light-200);--pf-global--BorderColor:var(--pf-global--BorderColor--light);--pf-global--primary-color--100:var(--pf-global--primary-color--light-100);--pf-global--link--Color:var(--pf-global--primary-color--light-100);--pf-global--link--Color--hover:var(--pf-global--link--Color--light-hover);--pf-global--BackgroundColor--100:var(--pf-global--BackgroundColor--dark-100);}.pf-c-page__header .pf-c-card,.pf-c-page__main-section[class*="pf-m-dark-"] .pf-c-card{--pf-c-card--BackgroundColor:var(--pf-global--BackgroundColor--dark-transparent-200);}.pf-c-page{--pf-c-page__header--ZIndex:var(--pf-global--ZIndex--md);--pf-c-page__header--MinHeight:4.75rem;--pf-c-page__header-brand--PaddingTop:var(--pf-global--spacer--sm);--pf-c-page__header-brand--PaddingRight:var(--pf-global--spacer--xl);--pf-c-page__header-brand--PaddingBottom:var(--pf-global--spacer--sm);--pf-c-page__header-brand--PaddingLeft:var(--pf-global--spacer--md);--pf-c-page__header-brand--md--PaddingLeft:var(--pf-global--spacer--xl);--pf-c-page__header-brand--md--BackgroundColor:var(--pf-global--BackgroundColor--dark-transparent-100);--pf-c-page__header-brand--md--FlexBasis:18.125rem;--pf-c-page__header-sidebar-toggle__c-button--Padding:var(--pf-global--spacer--sm);--pf-c-page__header-sidebar-toggle__c-button--MarginRight:var(--pf-global--spacer--md);--pf-c-page__header-sidebar-toggle__c-button--MarginLeft:calc(var(--pf-global--spacer--xs) * -1);--pf-c-page__header-sidebar-toggle__c-button--md--MarginLeft:calc(var(--pf-global--spacer--sm) * -1);--pf-c-page__header-sidebar-toggle__c-button--FontSize:var(--pf-global--FontSize--2xl);--pf-c-page__header-brand-link--MarginLeft:var(--pf-global--spacer--md);--pf-c-page__header-brand-link--c-brand--MaxHeight:3.75rem;--pf-c-page__header-brand-link--md--MaxWidth:9.375rem;--pf-c-page__header-nav--PaddingLeft:var(--pf-global--spacer--md);--pf-c-page__header-nav--md--PaddingLeft:var(--pf-global--spacer--xl);--pf-c-page__header-nav--lg--MarginLeft:var(--pf-global--spacer--xl);--pf-c-page__header-nav--lg--MarginRight:var(--pf-global--spacer--xl);--pf-c-page__header-nav--BackgroundColor:var(--pf-global--BackgroundColor--dark-transparent-100);--pf-c-page__header-tools--MarginTop:var(--pf-global--spacer--sm);--pf-c-page__header-tools--MarginRight:var(--pf-global--spacer--md);--pf-c-page__header-tools--MarginBottom:var(--pf-global--spacer--sm);--pf-c-page__header-tools--md--MarginRight:var(--pf-global--spacer--xl);--pf-c-page__header-tools--c-dropdown__toggle-text--MaxWidth:20ch;--pf-c-page__header-tools--c-avatar--MarginLeft:var(--pf-global--spacer--md);--pf-c-page__sidebar--ZIndex:var(--pf-global--ZIndex--sm);--pf-c-page__sidebar--Width:80%;--pf-c-page__sidebar--md--Width:18.125rem;--pf-c-page__sidebar--PaddingTop:var(--pf-global--spacer--md);--pf-c-page__sidebar--PaddingBottom:var(--pf-global--spacer--md);--pf-c-page__sidebar--BackgroundColor:var(--pf-global--BackgroundColor--light-100);--pf-c-page__sidebar--BoxShadow:var(--pf-global--BoxShadow--lg-right);--pf-c-page__sidebar--Transition:var(--pf-global--Transition);--pf-c-page__sidebar--Transform--out:translate3d(-100%, 0, 0);--pf-c-page__sidebar--md--Transform--in:translate3d(0, 0, 0);--pf-c-page__main-section--Padding:var(--pf-global--spacer--md);--pf-c-page__main-section--md--Padding:var(--pf-global--spacer--xl);--pf-c-page__main-section--BackgroundColor:var(--pf-global--BackgroundColor--light-300);--pf-c-page__main--ZIndex:var(--pf-global--ZIndex--xs);--pf-c-page__main-nav--PaddingTop:var(--pf-global--spacer--md);--pf-c-page__main-nav--PaddingRight:0;--pf-c-page__main-nav--PaddingBottom:var(--pf-global--spacer--md);--pf-c-page__main-nav--PaddingLeft:var(--pf-global--spacer--md);--pf-c-page__main-nav--md--PaddingLeft:var(--pf-global--spacer--xl);--pf-c-page__main-nav--BackgroundColor:var(--pf-global--BackgroundColor--light-100);--pf-c-page__main-section--m-light--BackgroundColor:var(--pf-global--BackgroundColor--light-100);--pf-c-page__main-section--m-dark-100--BackgroundColor:var(--pf-global--BackgroundColor--dark-transparent-100);--pf-c-page__main-section--m-dark-200--BackgroundColor:var(--pf-global--BackgroundColor--dark-transparent-200);display:grid;height:100vh;grid-template-columns:1fr;grid-template-rows:max-content 1fr;grid-template-areas:"header" "main";}@media (min-width: 768px){.pf-c-page{grid-template-columns:max-content 1fr;grid-template-areas:"header header" "nav main";}}.pf-c-page__header{grid-area:header;z-index:var(--pf-c-page__header--ZIndex);display:flex;flex-wrap:wrap;align-items:center;max-width:100%;min-height:var(--pf-c-page__header--MinHeight);}.pf-c-page__header > *{display:flex;align-items:center;}.pf-c-page__header-brand{padding-left:var(--pf-c-page__header-brand--PaddingLeft);}@media (min-width: 768px){.pf-c-page__header-brand{--pf-c-page__header-brand--PaddingLeft:var(--pf-c-page__header-brand--md--PaddingLeft);flex:0 0 var(--pf-c-page__header-brand--md--FlexBasis);align-self:stretch;padding-right:var(--pf-c-page__header-brand--PaddingRight);background-color:var(--pf-c-page__header-brand--md--BackgroundColor);}}.pf-c-page__header-brand-link{display:flex;flex:1;align-items:center;}.pf-c-page__header-brand-link .pf-c-brand{max-height:var(--pf-c-page__header-brand-link--c-brand--MaxHeight);}@media screen and (max-width: 768px){.pf-c-page__header-brand-link{max-width:var(--pf-c-page__header-brand-link--md--MaxWidth);}}.pf-c-page__header-brand-toggle .pf-c-button{padding:var(--pf-c-page__header-sidebar-toggle__c-button--Padding);margin-right:var(--pf-c-page__header-sidebar-toggle__c-button--MarginRight);margin-left:var(--pf-c-page__header-sidebar-toggle__c-button--MarginLeft);font-size:var(--pf-c-page__header-sidebar-toggle__c-button--FontSize);line-height:1;}@media screen and (min-width: 768px){.pf-c-page__header-brand-toggle .pf-c-button{--pf-c-page__header-sidebar-toggle__c-button--MarginLeft:var(--pf-c-page__header-sidebar-toggle__c-button--md--MarginLeft);}}.pf-c-page__header-nav{order:1;width:100vw;padding-left:var(--pf-c-page__header-nav--PaddingLeft);overflow:hidden;background-color:var(--pf-c-page__header-nav--BackgroundColor);}@media screen and (min-width: 768px){.pf-c-page__header-nav{--pf-c-page__header-nav--PaddingLeft:var(--pf-c-page__header-nav--md--PaddingLeft);}}@media screen and (min-width: 992px){.pf-c-page__header-nav{flex:1;align-self:flex-end;order:initial;width:auto;padding:0;margin-right:var(--pf-c-page__header-nav--lg--MarginRight);margin-left:var(--pf-c-page__header-nav--lg--MarginLeft);background-color:transparent;}}.pf-c-page__header-tools{align-items:center;margin-top:var(--pf-c-page__header-tools--MarginTop);margin-right:var(--pf-c-page__header-tools--MarginRight);margin-bottom:var(--pf-c-page__header-tools--MarginBottom);margin-left:auto;}@media screen and (min-width: 768px){.pf-c-page__header-tools{--pf-c-page__header-tools--MarginRight:var(--pf-c-page__header-tools--md--MarginRight);}}.pf-c-page__header-tools .pf-c-dropdown__toggle-text{max-width:var(--pf-c-page__header-tools--c-dropdown__toggle-text--MaxWidth);}.pf-c-page__header-tools .pf-c-avatar{margin-left:var(--pf-c-page__header-tools--c-avatar--MarginLeft);}.pf-c-page__sidebar{grid-area:2 / 1;z-index:var(--pf-c-page__sidebar--ZIndex);width:var(--pf-c-page__sidebar--Width);padding-top:var(--pf-c-page__sidebar--PaddingTop);padding-bottom:var(--pf-c-page__sidebar--PaddingBottom);overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;background-color:var(--pf-c-page__sidebar--BackgroundColor);transition:var(--pf-c-page__sidebar--Transition);transform:var(--pf-c-page__sidebar--Transform--out);}@media screen and (min-width: 768px){.pf-c-page__sidebar{flex:1;order:initial;width:var(--pf-c-page__sidebar--md--Width);max-width:var(--pf-c-page__sidebar--md--Width);box-shadow:var(--pf-c-page__sidebar--BoxShadow);transform:var(--pf-c-page__sidebar--md--Transform--in);}}.pf-c-page__sidebar.pf-m-expanded{box-shadow:var(--pf-c-page__sidebar--BoxShadow);transform:translate3d(0, 0, 0);}@media screen and (min-width: 768px){.pf-c-page__sidebar.pf-m-collapsed{max-width:0;overflow:hidden;}}.pf-c-page__main{grid-area:main;z-index:var(--pf-c-page__main--ZIndex);display:flex;flex-direction:column;padding-right:0;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;}.pf-c-page__main-nav{padding:var(--pf-c-page__main-nav--PaddingTop) var(--pf-c-page__main-nav--PaddingRight) var(--pf-c-page__main-nav--PaddingBottom) var(--pf-c-page__main-nav--PaddingLeft);background-color:var(--pf-c-page__main-nav--BackgroundColor);}@media screen and (min-width: 768px){.pf-c-page__main-nav{--pf-c-page__main-nav--PaddingLeft:var(--pf-c-page__main-nav--md--PaddingLeft);}}.pf-c-page__main-section{padding:var(--pf-c-page__main-section--Padding);background-color:var(--pf-c-page__main-section--BackgroundColor);}@media screen and (min-width: 768px){.pf-c-page__main-section{--pf-c-page__main-section--Padding:var(--pf-c-page__main-section--md--Padding);}}.pf-c-page__main-section:last-of-type,.pf-c-page__main-section:only-child{flex-grow:1;background-color:var(--pf-c-page__main-section--BackgroundColor);}.pf-c-page__main-section.pf-m-light{background-color:var(--pf-c-page__main-section--m-light--BackgroundColor);}.pf-c-page__main-section.pf-m-dark-100{background-color:var(--pf-c-page__main-section--m-dark-100--BackgroundColor);}.pf-c-page__main-section.pf-m-dark-200{background-color:var(--pf-c-page__main-section--m-dark-200--BackgroundColor);}`);
