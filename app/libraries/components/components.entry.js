const r = (a) => {
  console.log(a);
};
Drupal.behaviors.Card = {
  attach(a) {
    once("card", ".card", a).forEach((c) => {
      r(c);
    });
  }
};
//# sourceMappingURL=components.entry.js.map
