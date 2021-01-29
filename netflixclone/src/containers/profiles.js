/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Header, Profiles } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg'


export function SelectProfileContainer({ user, setProfile }) {
  return (
      <>
        <Header bg={false}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix"/>
            </Header.Frame>
        </Header>

        <Profiles>
            <Profiles.Title>Who's watching</Profiles.Title>
            <Profiles.List>
                <Profiles.User onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
                    <Profiles.Picture src={user.photoURL}/>
                    <Profiles.Name>{user.displayName}</Profiles.Name>
                </Profiles.User>
            </Profiles.List>
        </Profiles>
      </>
  );
}
