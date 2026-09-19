<template>
  <article class="product-card">
    <div class="product-card__media">
      <img class="product-card__image" src="@/assets/images/solimo-600x450.jpg"
        alt="Solimo Coffee Beans — roasted coffee beans" width="600" height="450" loading="lazy" decoding="async" />
      <span class="product-card__overlay" aria-hidden="true"></span>
      <span class="badge badge--popular product-card__flag">Popular</span>
    </div>

    <div class="product-card__body">
      <div class="product-card__head">
        <div>
          <h3 class="product-card__title">
            <a class="product-card__link" href="product.html">Solimo Coffee Beans</a>
          </h3>
          <p class="product-card__weight">2kg</p>
        </div>

        <p class="rating">
          <svg class="icon icon--2xs icon--filled rating__star" aria-hidden="true">
            <use href="#i-star"></use>
          </svg>
          <span class="rating__value">4.8</span>
        </p>
      </div>

      <p class="product-card__desc">
        Rich, full-bodied with notes of dark chocolate and caramel.
        Perfect for espresso and French press brewing.
      </p>

      <div class="product-card__badges">
        <span class="badge badge--origin"><svg class="icon icon--2xs" aria-hidden="true">
            <use href="#i-leaf"></use>
          </svg>Brazil</span>
        <span class="badge badge--roast-md-dark">Medium Dark</span>
      </div>

      <div class="product-card__footer">
        <p class="product-card__price">$34.99</p>
        <span class="product-card__action" aria-hidden="true">
          View
          <svg class="icon icon--xs" aria-hidden="true">
            <use href="#i-chevron-right"></use>
          </svg>
        </span>
      </div>
    </div>
  </article>
</template>