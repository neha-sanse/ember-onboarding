import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render, find } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

describe("Integration | Component | rental/detailed", async function () {
  setupRenderingTest();
  this.beforeEach(function () {
    this.setProperties({
      rental: {
        id: "grand-old-mansion",
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
  });
  await render(hbs`<Rental::Detailed />`);
  it("it renders a header with a share button", async function () {
    await render(hbs`<Rental::Detailed @rental={{this.rental}} />`);

    expect(find(".jumbo")).exists();
    expect(find(".jumbo h2")).contains("Grand Old Mansion");
    expect(find(".jumbo p")).contains(
      "a nice place to stay near San Francisco"
    );
    expect(find(".jumbo a.button")).contains("Share on Twitter");
  });
});
