import { describe, it } from "mocha";
import { expect } from "chai";
import { setupApplicationTest } from "ember-mocha";
import { visit, currentURL, click, find } from "@ember/test-helpers";

describe("Acceptance | super rentals", function () {
  setupApplicationTest();

  it("can visit /", async function () {
    await visit("/");
    expect(currentURL()).to.equal("/");
    expect(find("h2").textContent.trim()).to.equal("Welcome to Super Rentals!");

    expect(find(".jumbo a.button").textContent.trim()).to.equal("About Us");

    await click(".jumbo a.button");
    expect(currentURL()).to.equal("/about-us");
  });

  it("can visit /about-us", async function () {
    await visit("/about-us");
    expect(currentURL()).to.equal("/about-us");
    expect(document.querySelector("h2")).to.exist;
    expect(find("h2").textContent.trim()).to.equal("About Super Rentals");
    expect(find(".jumbo a.button").textContent.trim()).to.equal("Contact Us");

    await click(".jumbo a.button");
    expect(currentURL()).to.equal("/meet-us");
  });

  it("can visit /meet-us", async function () {
    await visit("/meet-us");
    expect(currentURL()).to.equal("/meet-us");
    expect(document.querySelector("h2")).to.exist;
    expect(find("h2").textContent.trim()).to.equal("Contact Us");
    expect(find(".jumbo a.button").textContent.trim()).to.equal("About Us");
    await click(".jumbo a.button");
    expect(currentURL()).to.equal("/about-us");
  });
});
