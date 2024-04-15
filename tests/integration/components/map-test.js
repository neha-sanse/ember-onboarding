import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render, find } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

describe("Integration | Component | map", function () {
  setupRenderingTest();

  it("renders Map with given Lats and longs", async function () {
    await render(hbs`<Map
    @lat="37.7797"
    @lng="-122.4184"
    @zoom="10"
    @width="150"
    @height="120"
  />`);

    expect(find(".map")).to.exist;
    const mapComponent = await find(".map img");
    console.log(mapComponent);
    expect(mapComponent).to.have.attribute(
      "alt",
      "Map image at coordinates 37.7797,-122.4184"
    );
    expect(mapComponent.src).to.contain(
      "https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4184,37.7797,10/150x120@2x"
    );
    expect(mapComponent).to.have.attribute("width", "150");
    expect(mapComponent).to.have.attribute("height", "120");
  });
});
