import { expect } from "chai";
import { describe, it } from "mocha";
import { setupTest } from "ember-mocha";

describe("Unit | Model | rental", function () {
  setupTest();

  it("exists", function () {
    let store = this.owner.lookup("service:store");
    let rental = store.createRecord("rental", {
      id: "grand-old-mansion",
      title: "Grand Old Mansion",
      owner: "Veruca Salt",
      city: "San Francisco",
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
      category: "Estate",
      bedrooms: 15,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
      description:
        "This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.",
    });
    expect(rental).to.be.ok;

    expect(rental.type).to.be.equal("Standalone");

    rental.category = "Condo";
    expect(rental.type).to.be.equal("Community");

    rental.category = "Townhouse";
    expect(rental.type).to.be.equal("Community");

    rental.category = "Apartment";
    expect(rental.type).to.be.equal("Community");

    rental.category = "Estate";
    expect(rental.type).to.be.equal("Standalone");
  });
});
