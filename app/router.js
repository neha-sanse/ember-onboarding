import EmberRouter from "@ember/routing/router";
import config from "super-rental/config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("about-us");
  this.route("contact-us", { path: "meet-us" });
  this.route("rental", { path: "/rentals/:rental_id" });
});
