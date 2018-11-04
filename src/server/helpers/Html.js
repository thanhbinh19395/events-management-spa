import React from 'react';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';

const Html = (props) => {
  const { styles, js, component, state } = props;
  const head = Helmet.renderStatic();
  const htmlAttrs = head.htmlAttributes.toComponent();

  return (
    <html lang="en" {...htmlAttrs}>
      <head>
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}
        {styles.map(name => (
          <link rel="stylesheet" href={name} key={name} />
        ))}
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: component }} />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.INITIAL_STATE = ${serialize(state)}`,
          }}
          charSet="UTF-8"
        />
        {js.map(name => (
          <script
            type="text/javascript"
            src={name}
            key={name}
            charSet="UTF-8"
          />
        ))}
      </body>
    </html>
  );
};

export default Html;
