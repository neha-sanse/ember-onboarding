import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { visit, currentURL, click, find } from "@ember/test-helpers";
import percySnapshot from "@percy/ember";

describe("Acceptance | super rentals", function () {
  setupApplicationTest();
  this.beforeEach(() => {});
  it("can visit /", async function () {
    await visit("/");
    expect(currentURL()).to.equal("/");
    expect(find("h2").textContent.trim()).to.equal("Welcome to Super Rentals!");

    expect(find(".jumbo a.button").textContent.trim()).to.equal("About Us");
    await percySnapshot("home page");

    await click(".jumbo a.button");
    expect(currentURL()).to.equal("/about-us");
  });

  it("viewing the details of a rental property", async function () {
    await visit("/");
    expect(find(".rental")).to.have.length(3);
    await click(".rental:first-of-type a");
    expect(currentURL()).to.equal("/rentals/grand-old-mansion");
  });

  it("visiting /rentals/grand-old-mansion", async function () {
    await visit("/rentals/grand-old-mansion");

    expect(currentURL()).to.equal("/rentals/grand-old-mansion");
    expect(find("nav")).to.exists;
    expect(find("h1")).to.have.text("SuperRentals");
    expect(find(".rental.detailed")).exists;
  });

  it("can visit /about-us", async function () {
    await visit("/about-us");
    expect(currentURL()).to.equal("/about-us");
    expect(document.querySelector("h2")).to.exist;
    expect(find("h2").textContent.trim()).to.equal("About Super Rentals");
    expect(find(".jumbo a.button").textContent.trim()).to.equal("Contact Us");
    await percySnapshot("about page");

    await click(".jumbo a.button");
    expect(currentURL()).to.equal("/meet-us");
  });

  it("can visit /meet-us", async function () {
    await visit("/meet-us");
    expect(currentURL()).to.equal("/meet-us");
    expect(document.querySelector("h2")).to.exist;
    expect(find("h2").textContent.trim()).to.equal("Contact Us");
    expect(find(".jumbo a.button").textContent.trim()).to.equal("About Us");
    await percySnapshot("contact page");

    await click(".jumbo a.button");
    expect(currentURL()).to.equal("/about-us");
  });

  it("navigating using the nav-bar", async function () {
    await visit("/");

    expect(find("nav")).to.exist;
    expect(find("nav a.menu-index").textContent.trim()).to.equal(
      "SuperRentals"
    );
    expect(find("nav a.menu-about").textContent.trim()).to.equal("About");
    expect(find("nav a.menu-contact").textContent.trim()).to.equal("Contact");

    await click("nav a.menu-index");
    await expect(currentURL()).to.equal("/");

    await click("nav a.menu-about");
    expect(currentURL()).to.equal("/about-us");

    await click("nav a.menu-contact");
    expect(currentURL()).to.equal("/meet-us");
  });
});
