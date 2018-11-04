import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

class AboutPage extends PureComponent {
  head() {
    return (
      <Helmet>
        <title>About Page Title</title>
        <meta property="og:title" content="About Page Title" />
      </Helmet>
    );
  }

  render() {
    /* eslint-disable-next-line max-len */
    const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt in risus id feugiat. Proin in arcu sed massa rhoncus convallis. Nullam pharetra quam arcu. Duis gravida venenatis ante, sit amet pretium dolor fermentum vitae. Curabitur non nisi finibus, tincidunt sapien nec, sagittis velit. Maecenas vulputate posuere ultricies. Donec at metus id ligula accumsan molestie. Duis ac enim justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
    return (
      <div>
        <h3>
          {this.head()}
        About Page
        </h3>
        <p>{content}</p>
      </div>
    );
  }
}

AboutPage.propTypes = {};

export default {
  component: AboutPage,
};
