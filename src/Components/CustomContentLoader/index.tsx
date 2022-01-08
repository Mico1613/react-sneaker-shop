import React, { ReactElement } from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

interface Props {}

const ContentLoaderWrapper = styled.div`
  padding: 36px 29px 35px 29px;
  border: 1px solid #f3f3f3;
  border-radius: 40px;
`;

function CustomContentLoader(props: Props): ReactElement {
  return (
    <ContentLoaderWrapper>
      <ContentLoader
        speed={1.5}
        width={150}
        height={188}
        viewBox="0 0 150 188"
        backgroundColor="#f8f6f6"
        foregroundColor="#f0faff"
        {...props}
      >
        <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
        <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
        <rect x="0" y="126" rx="3" ry="3" width="150" height="15" />
        <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
        <rect x="117" y="155" rx="8" ry="8" width="32" height="32" />
      </ContentLoader>
    </ContentLoaderWrapper>
  );
}

export default CustomContentLoader;
