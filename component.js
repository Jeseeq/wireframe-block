import $editor from 'weblium/editor'

const {pick} = _

const AboutBlock = ({components: {Text, Image, Button}, style: css}) => (
  <section className={css.section}>
    <div aria-hidden="true" hidden>
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol id="about-facebook" viewBox="0 0 8 16">
          <path
            d="M1.938 15.301H4.67V7.797h2.05l.405-2.345H4.67V3.753c0-.547.354-1.123.86-1.123h1.396V.286h-1.71v.01C2.54.393 1.99 1.943 1.943 3.57h-.005v1.882H.571v2.345h1.367v7.504z"
            fillRule="evenodd"
          />
        </symbol>
        <symbol id="about-linkedin" viewBox="0 0 16 16">
          <g fillRule="evenodd">
            <path d="M2.157 4.129c1.032 0 1.87-.764 1.87-1.707 0-.943-.838-1.708-1.87-1.708C1.123.714.286 1.48.286 2.422s.837 1.707 1.87 1.707M.714 15.105H4.07V5.429H.714zM8.778 9.723c0-1.11.525-2.195 1.78-2.195 1.256 0 1.564 1.085 1.564 2.169v5.284h3.34v-5.5C15.462 5.658 13.203 5 11.814 5c-1.389 0-2.155.47-3.036 1.608V5.305h-3.35v9.676h3.35V9.723z" />
          </g>
        </symbol>
        <symbol id="about-twitter" viewBox="0 0 16 12">
          <path
            d="M14.87.263c-.422.271-1.395.665-1.874.665a3.006 3.006 0 0 0-5.103 2.748C5.64 3.618 3.178 2.49 1.696.558c-.912 1.578-.123 3.333.911 3.972-.354.027-1.005-.04-1.312-.34-.02 1.047.483 2.435 2.319 2.938-.354.19-.98.136-1.252.095.096.884 1.333 2.04 2.687 2.04-.482.558-2.298 1.57-4.335 1.248a9.032 9.032 0 0 0 4.703 1.33c4.85 0 8.616-3.931 8.413-8.78v-.017-.038l-.001-.043a5.186 5.186 0 0 0 1.457-1.54c-.246.136-.982.406-1.667.474.44-.238 1.091-1.015 1.252-1.633"
            fillRule="evenodd"
          />
        </symbol>
      </svg>
    </div>
    <div className={css.section__inner}>
      <article className={css.article}>
        <Image pictureClassName={css.article__picture} bind="article__picture-0" />
        <div className={css.article__content}>
          <h1 className={css.article__title}>
            <Text bind="title" />
          </h1>
          <p className={css.article__subtitle}>
            <Text bind="subtitle" />
          </p>
          <p className={css.article__text}>
            <Text bind="text" />
          </p>
          <section className={css.article__socials}>
            <h3 className={classNames(css.article__subtitle, css['article__subtitle--socials'])}>
              <Text bind="social-title" />
            </h3>
            <ul className={css.socials}>
              <li className={css.socials__item}>
                <a href="#id" className={css.socials__link} target="_blank" title="Twitter">
                  <svg className={css.socials__icon}>
                    <use xmlns="http://www.w3.org/1999/xlink" xlinkHref="#about-twitter" href="#about-twitter" />
                  </svg>
                </a>
              </li>
              <li className={css.socials__item}>
                <a href="#id" className={css.socials__link} target="_blank" title="Facebook">
                  <svg className={css.socials__icon}>
                    <use xmlns="http://www.w3.org/1999/xlink" xlinkHref="#about-facebook" href="#about-facebook" />
                  </svg>
                </a>
              </li>
              <li className={css.socials__item}>
                <a href="#id" className={css.socials__link} target="_blank" title="LinkedIn">
                  <svg className={css.socials__icon}>
                    <use xmlns="http://www.w3.org/1999/xlink" xlinkHref="#about-linkedin" href="#about-linkedin" />
                  </svg>
                </a>
              </li>
            </ul>
          </section>
          <div className={css['btns-group']}>
            <Button className={css.link} bind="link-1" />
            <Button
              className={classNames(css.button, css['button--primary'], css['button--size-md'])}
              bind="button button--primary button--size-md-0"
            />
          </div>
        </div>
      </article>
    </div>
  </section>
)

AboutBlock.propTypes = {
  components: PropTypes.object.isRequired,
}

AboutBlock.defaultContent = {
  title: 'About The Company',
  'social-title': 'Follow us:',
  subtitle: 'Our Company is the world’s leading manufacturer. We are also a leading financial services provider.',
  text:
    'We are in it for the long haul—for our customers and for our world. Our customers can be found in virtually every corner of the earth, and we realize our success comes directly from helping our customers be successful. We take seriously our responsibility to give back to the communities in which we work and live.',
  'article__picture-0': {
    resourceRef: 'res/5a3b7fae9433854714fdb072/5a3b7fc39433854714fdb073.jpeg',
    alt: 'Picture about the company',
  },
  'button button--primary button--size-md-0': {
    link: '',
    textValue: 'Contact us',
  },
  'link-1': {
    link: 'https://jantwel.github.io/block-parser/#',
    textValue: 'More about us',
  },
}

AboutBlock.components = pick(['Text', 'Image', 'Button'])($editor.components)

export default AboutBlock
