import classNames from 'classnames';
import React from 'react';
import { IIsLight } from '../../shared/IsLight';
import { ITestId } from '../../shared/TestId';

export interface IPageTitleProps extends ITestId, IIsLight {
  title: string;
  subTitle?: string;
}

export const PageTitle = ({ title, subTitle, testID, isLight = true }: IPageTitleProps) => {
  const pageTitleClass = classNames({
    'page-title': true,
    'page-title--dark': !isLight,
  });

  return (
    <div className={pageTitleClass} data-testid={testID}>
      <div className="page-title__container">
        <h1 className="page-title__title">{title}</h1>
        {subTitle && <p className="page-title__subTitle">{subTitle}</p>}
      </div>
    </div>
  );
};
