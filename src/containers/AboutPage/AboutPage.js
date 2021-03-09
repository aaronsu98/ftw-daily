import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Saunatime',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Experience the Convenience of 3D Printing.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Did you know that people in your neighborhoods own 3D printers at home?</p>
            </div>

            <div className={css.contentMain}>
              <p>
                We have 3D printers in Berkeley, CA! They might be in your neighborhood!! In addition,
                more 3D printer owners will join the 3DShare base. You deserve the convenience of 3D 
                printing!
              </p>

              <p>
                To enjoy the low-cost convenience of 3D printing service, you need to look beyond makerspace, school labs, or other fabrication spaces, and
                instead connect with a 3D printer owner near you within walking distance! 3DShare makes this possible for
                every customer. All our 3D printers are owned by individuals willing to help you print your coolest 3D models!
              </p>

              <h3 className={css.subtitle}>Are you a 3D printer owner?</h3>

              <p>
                3DShare offers you a great way to earn some extra cash! If you're not using your
                3D printers very often, why not run prints for others while it's free! Don't let your printers sit 
                and sleep! Contact us for more information! We would love to have you on board.
              </p>

            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
