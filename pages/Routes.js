import loadable from "@loadable/component";

const LoginPage = loadable(() => import("./staticpages/login"), {
  ssr: true,
});
export default [
  {
    path: "/login",
    component: LoginPage,
  },
];
