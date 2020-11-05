import data from './data.js';

const getDOM = selector => () => {
  return document.querySelector(selector);
};

document.title = `${data.name} | ${data.role}`

const dom = {
  data: {
    name: getDOM('#main #name'),
    mail: getDOM('#main #mail'),
    img: getDOM('#main #img'),
    role: getDOM('#main #role'),
    connects: getDOM('#main #connects'),
    links: getDOM('#main #links')
  },
  projects: getDOM('#projects'),
  logo: getDOM('#projects-page #logo')
};

function assignDOM(dom, value, options) {
  if (options && options.isImg) {
    dom.src = value;
    return;
  }

  if (options && options.isAdjacent) {
    dom.insertAdjacentHTML('afterbegin', value);
  }

  dom.innerHTML = value;
}

assignDOM(dom.data.name(), data.name);
assignDOM(dom.data.mail(), data.mail);
dom.data.mail().href = `mailto:${data.mail}?Subject=Hello%20Ivan!`;
assignDOM(dom.data.img(), data.img, { isImg: true });
assignDOM(dom.data.role(), data.role);

const connectsDOM = data.connects
  .map(
    ({ name, iconName, link }) =>
      `<a href=${link} target="_blank"><ion-icon name="${iconName}" title="${name}"></ion-icon></a>`
  )
  .join('\n');
assignDOM(dom.data.connects(), connectsDOM);

const getLinks = links =>
  links
    .map(({ name, link }) => `<a href="${link}" class="text-pink-500" >${name}</a>`)
    .map((link, index, links) => index === links.length - 1 ? link: `${link} - `)
    .join('\n');
assignDOM(dom.data.links(), getLinks(data.links));

