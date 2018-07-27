import React from 'react';
import styled from 'styled-components';
import SuggestedTrackListEntry from './SuggestedTrackListEntry.jsx';

const SuggestedTrackBox = styled.div`
  margin: 2px;
  display: inline-block;
`;

const TitleText = styled.div`
  font-family: Arial;
  font-weight: normal;
  color: silver;
  border-bottom: 1px solid silver;
`;

const SuggestedTrackList = (props) => {
  const suggestedTracks = props.suggestedTracks;
  return (
    <SuggestedTrackBox>
      <TitleText>
        <i className="fas fa-music">
          &nbsp;&nbsp;
        </i>
        Related Tracks
      </TitleText>
      <div>
        {suggestedTracks.map((track) => <SuggestedTrackListEntry track = {track}/>)}

      </div>
    </SuggestedTrackBox>
  );
};

// SuggestedTrackList.propTypes = {
//   suggestedTracks: React.PropTypes.array.isRequired
// };

export default SuggestedTrackList;
