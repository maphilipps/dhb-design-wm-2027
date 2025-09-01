const c = a => {
  console.log(a)
}
Drupal.behaviors.Card = {
  attach(a) {
    once('card', '.card', a).forEach(o => {
      c(o)
    })
  },
}
