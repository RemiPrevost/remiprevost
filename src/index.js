import "./style.scss";

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const [bannerDark] = document.getElementsByClassName("banner dark-mode");
  const [profileImageContainer] = bannerDark.getElementsByClassName("profile-image-container");
  const [textContainer] = bannerDark.getElementsByClassName("text-container");
  const texts = [...bannerDark.getElementsByClassName('text')];
  const [separator] = bannerDark.getElementsByClassName('separator');

  const [bannerLight] = document.getElementsByClassName('banner light-mode');
  const [engineer] = bannerLight.getElementsByClassName('text engineer');
  const [socialNetworks] = bannerLight.getElementsByClassName('social-networks');

  const transitions = [
    { element: root, after: 1000 },
    { element: profileImageContainer },
    { element: textContainer, after: 1500 },
    ...[].concat(...texts.map(text => {
      const [box] = text.getElementsByClassName('box');

      return [
        { element: box, after: 200, className: 'transition' },
        { element: box, after: 500, className: 'hidden' },
      ]
    })),
    { element: separator },
    { element: bannerLight, after: 1000 },
    { element: engineer, after: 1000, className: 'transition' },
    { element: engineer, after: 500 },
    { element: socialNetworks, after: 1000 },
  ];

  const shootTransition = transitionsLeft => {
    const [transition] = transitionsLeft;

    if (transition === undefined) {
      return;
    }

    const {
      element,
      after = 0,
      className = 'visible'
    } = transition;

    setTimeout(() => {
      element.classList.add(className);

      shootTransition(transitionsLeft.slice(1));
    }, after);
  }

  shootTransition(transitions);
});
