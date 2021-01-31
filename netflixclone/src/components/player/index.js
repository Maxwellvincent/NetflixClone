/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom';
import { Container, Button, Overlay, Inner } from './styles/player';

export const PlayerContext = createContext();

export default function ({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}>
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      Play
    </Button>
  );
};
