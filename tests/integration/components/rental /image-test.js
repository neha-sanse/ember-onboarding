import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render, findAll } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

describe("Integration | Component | rental/image", function () {
  setupRenderingTest();

  it("it renders", async function () {
    await render(hbs`<Rental::Image />`);

    expect(this.element).trimmed.to.have.text("");
  });

  it("it renders the given image", async function () {
    await render(hbs`
      <Rental::Image>
        template block text
      </Rental::Image>
      <Rental::Image
        src="/assets/images/teaching-tomster.png"
        alt="Teaching Tomster"
      />
    `);

    expect(this.element).trimmed.to.have.text("template block text");
    expect(findAll(".image img")[1]).to.have.attribute(
      "alt",
      "Teaching Tomster"
    );
    expect(findAll(".image img")[1]).to.have.attribute(
      "src",
      "/assets/images/teaching-tomster.png"
    );
  });
});
