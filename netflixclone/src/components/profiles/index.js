/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Title, List, Item, Picture, Name } from './styles/profiles';

export default function Profiles({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Profiles.List = function ProfilesList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Profiles.User = function ProfilesUser({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
};

Profiles.Name = function ProfilesName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};