import React from 'react';
import {
  TRenderEngineProvider,
  RenderHTMLConfigProvider,
  RenderHTMLSource
} from 'react-native-render-html';



const BaseHTMLEngineProvider = (props) => {
  return (
      <TRenderEngineProvider dangerouslyDisableWhitespaceCollapsing>
          <RenderHTMLConfigProvider >
              {props.children}
          </RenderHTMLConfigProvider>
      </TRenderEngineProvider>
  );
};


const App = () => {
  const source = {
    html: `<div>str1</div><br /><div>str2</div><br /><div>str3</div>`
  };

  return (
    <BaseHTMLEngineProvider>
      <RenderHTMLSource source={source} contentWidth={500} />
    </BaseHTMLEngineProvider>
  )
};

export default App;
