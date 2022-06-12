import "@emotion/react";
import theme from "./theme";

type T = typeof theme;

declare module "@emotion/react" {
    export interface Theme extends T {}
}
