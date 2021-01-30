/* eslint-disable prettier/prettier */
/* eslint-disable import/no-named-as-default */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useContent } from '../hooks';
import selectionFilter  from '../utils/selection-filter'
import {BrowseContainer} from '../containers/browse';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');

  const slides = selectionFilter({series, films});


   return <BrowseContainer slides={slides}/>;
}
