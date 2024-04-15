import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render, find, click } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

describe("Integration | Component | rental/image", function () {
  setupRenderingTest();
  it("it renders the given image", async function () {
    await render(hbs`
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);

    expect(find(".image img")).to.have.attribute("alt", "Teaching Tomster");
    expect(find(".image img")).to.have.attribute(
      "src",
      "/assets/images/teaching-tomster.png"
    );
  });
  it("toggles the image size on click", async function () {
    await render(hbs`
    <Rental::Image
      src="/assets/images/teaching-tomster.png"
      alt="Teaching Tomster"
    />
  `);
    expect(find(".image")).to.have.class("small");
    expect(find(".image small")).to.have.text("View Large");
    await click(find(".image img"));
    await expect(find(".image")).to.have.class("large");
    expect(find(".image small")).to.have.text("View Small");
  });
});
