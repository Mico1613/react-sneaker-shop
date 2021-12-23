import { createGlobalStyle } from "styled-components";

interface Props {
    isCartOpened?: boolean;
}

export const OpenedCartStyles = createGlobalStyle<Props>`
body {
    overflow: ${({ isCartOpened }) => (isCartOpened ? "hidden" : "auto")}
}
`;
