import { describe, it } from "mocha";
import { expect } from "chai";
import { setupRenderingTest } from "ember-mocha";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

describe("Integration | Component | jumbo", function () {
  setupRenderingTest();

  it("renders", async function () {
    await render(hbs`<Jumbo />`);
    expect(this.element.textContent.trim()).to.equal("");

    await render(hbs`<Jumbo>Hello World</Jumbo>`);
    expect(this.element.textContent.trim()).to.equal("Hello World");

    await render(hbs`
      <Jumbo>
        template block text
      </Jumbo>
    `);
    expect(this.element.textContent.trim()).to.equal("template block text");

    expect(this.element.querySelector(".jumbo")).to.exist;
    expect(this.element.querySelector(".jumbo").textContent.trim()).to.equal(
      "template block text"
    );
    expect(this.element.querySelector(".jumbo .tomster")).to.exist;
  });
});
