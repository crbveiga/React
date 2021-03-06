import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
:root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    
    --blue-light: #6933ff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

// font-size: 16px(Desktop)
html {
    @media (max-width: 1080px) {
        fontsize: 93.75%; 15px
    }

    @media (max-width: 720px) {
        fontsize: 87.5%; 14px
    }
}


body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`