import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render, find } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

describe("Integration | Component | rental", function () {
  setupRenderingTest();

  it("renders Rental with images and map", async function () {
    this.setProperties({
      rental: {
        title: "Grand Old Mansion",
        owner: "Veruca Salt",
        city: "San Francisco",
        location: {
          lat: 37.7749,
          lng: -122.4194,
        },
        category: "Estate",
        type: "Standalone",
        bedrooms: 15,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
        description:
          "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.",
      },
    });

    await render(hbs`<Rental @rental={{this.rental}} />`);

    expect(find("article")).to.have.class("rental");
    expect(find("article h3")).trimmed.to.have.text("Grand Old Mansion");
    expect(find("article .detail.owner")).to.contain.text("Veruca Salt");
    expect(find("article .detail.type")).to.contain.text("Standalone");
    expect(find("article .detail.location")).to.contain.text("San Francisco");
    expect(find("article .detail.bedrooms")).to.contain.text("15");
    expect(find("article .image")).exist;
    expect(find("article .map")).exist;
  });
});
