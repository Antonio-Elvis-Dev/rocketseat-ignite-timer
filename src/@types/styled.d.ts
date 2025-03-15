import 'styled-components'

import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme // TODO: guarda o valor de defaultTheme no ThemeType

declare module 'styled-components' { // TODO: definindo novas propriedades para o styled-compenents
    export interface DefaultTheme extends ThemeType { } // TODO: 'tipa' o props.theme de Button.sstyles.ts

} 