import { DefaultTheme } from 'styled-components'
import { ITheme, ThemeEnum } from "../interfaces/styled"

export const baseTheme: ITheme = {
    colors: {
        gray: "#c0d3d340",
        lightGray: "#e5f5f5",
        darkBlue: "#043D55",
        pink: "#fc00ff",
        yellow: "#fffc00",

        bg: "#c0d3d340",
        font: "#043D55"
    }
}

export const lightTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.light,

    colors: {
        ...baseTheme.colors,
        bg: "#c0d3d340",
        font: "#043D55"
    }
}

export const darkTheme: DefaultTheme = {
    ...baseTheme,
    type: ThemeEnum.dark,

    colors: {
        ...baseTheme.colors,
        bg: "#043D55",
        font: "#e5f5f5"
    }

}
