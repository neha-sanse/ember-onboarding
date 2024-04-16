import Component from "@glimmer/component";

export default class RentalFilter extends Component {
  get results() {
    let { rentals, query } = this.args;
    rentals = rentals.filter((rental) => rental.title.includes(query));
    return rentals;
  }
}
