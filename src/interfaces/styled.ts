export enum ThemeEnum  {
    light = "light",
    dark = "dark"
}

export interface ITheme {
    colors: {
        gray: string,
        lightGray: string,
        darkBlue: string,
        pink: string,
        yellow: string

        bg: string,
        font: string,
    }
}