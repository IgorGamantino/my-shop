import {createStitches} from "@stitches/react"

import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'], 
  display: 'swap',
})




export const {
config,
styled,
css,
theme,
createTheme,
keyframes,
getCssText,
globalCss
} = createStitches({
  theme: {
    fonts: {
       roboto: roboto.style.fontFamily
    },
    colors: {
      white: "#FFF",

      gray900: "#121214",
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: "#e1e1e6",

      green500:'#00875f',
      green300: "#00b37e"
    }
  }

})