// import { registerApplication, start } from "single-spa";

// fetch('https://run.mocky.io/v3/a23ed151-b1f5-4a7c-bcd0-acca1d932022')
//   .then(resp => resp.json())
//   .then(data => {
//     data.applications.forEach(app => {
//       registerApplication({
//         name: app.name,
//         app: () => System.import(app.package),
//         activeWhen: app.exact
//           ? (location) => location.pathname === app.activeWhen
//           : [app.activeWhen]
//       });
//     })
//   })
//   .finally(() => {
//     start({
//       urlRerouteOnly: true,
//     })
//   })


import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@i2020/header",
  app: () => System.import("@i2020/header"),
  activeWhen:['/header', '/rota', '/tabela'],
});

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen:(location) => location.pathname === '/',
// });

registerApplication({
  name: "@i2020/app-react-login",
  app: () => System.import("@i2020/app-react-login"),
  activeWhen:(location) => location.pathname === '/login' || location.pathname === '/',
});

registerApplication({
  name: "@i2020/rotas-react",
  app: () => System.import("@i2020/rotas-react"),
  activeWhen:['/rota'],
});

// registerApplication({
//   name: "@i2020/lazy-loading",
//   app: () => System.import("@i2020/lazy-loading"),
//   activeWhen:['/lazy'],
// });

registerApplication({
  name: "@i2020/tabela",
  app: () => System.import("@i2020/tabela"),
  activeWhen:(location) => location.pathname === '/tabela',
});



start({
  urlRerouteOnly: true,
});
