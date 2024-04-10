import { expect } from "chai";
import { describe, it } from "mocha";
import { setupRenderingTest } from "ember-mocha";
import { render, find } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

describe("Integration | Component | rental", function () {
  setupRenderingTest();

  it("renders", async function () {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Rental/>`);

    expect(find("article")).to.have.class("rental");
    expect(find("article h3")).to.have.text("Grand Old Mansion");
    expect(find("article .detail.owner")).to.contain.text("Veruca Salt");
    expect(find("article .detail.type")).to.contain.text("Standalone");
    expect(find("article .detail.location")).to.contain.text("San Francisco");
    expect(find("article .detail.bedrooms")).to.contain.text("15");
  });
});
