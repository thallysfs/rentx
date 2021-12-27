import 'styled-components';
import theme from './theme';

// sobrescrevendo o theme do styled-components
declare module 'styled-components' {
    type ThemeType = typeof theme;

    //agora acrescento o ThemeType ao DefaultTheme
    export interface DefaultTheme extends ThemeType {}
}
