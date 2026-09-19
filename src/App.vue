<script setup>
</script>

<template>
    <dev>
      <!-- ========== Компонент: header ========== -->
    <header class="header">
      <div class="header__inner">
        <a class="logo" href="index.html">
          <svg class="icon icon--lg logo__icon" aria-hidden="true">
            <use href="#i-coffee"></use>
          </svg>
          Coffee House
        </a>

        <nav class="header__nav" aria-label="Main">
          <a class="header__link" href="catalog.html">Our Coffee</a>
          <a
            class="header__link header__link--active"
            href="index.html"
            aria-current="page"
            >For your pleasure</a
          >
          <a class="header__link" href="contact.html">Contact</a>
        </nav>

        <button
          class="header__burger"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
          data-menu-toggle
        >
          <svg
            class="icon icon--lg header__burger-icon header__burger-icon--menu"
            aria-hidden="true"
          >
            <use href="#i-menu"></use>
          </svg>
          <svg
            class="icon icon--lg header__burger-icon header__burger-icon--close"
            aria-hidden="true"
          >
            <use href="#i-x"></use>
          </svg>
        </button>
      </div>

      <div class="header__mobile" id="mobile-menu" data-menu-panel>
        <div class="header__mobile-inner">
          <nav class="mobile-nav" aria-label="Mobile">
            <a class="mobile-nav__link" href="catalog.html">Our Coffee</a>
            <a
              class="mobile-nav__link mobile-nav__link--active"
              href="index.html"
              aria-current="page"
              >For your pleasure</a
            >
            <a class="mobile-nav__link" href="contact.html">Contact</a>
          </nav>
        </div>
      </div>
    </header>
    <!-- ========== /header ========== -->

    <main class="page" id="main">
      <!-- ========== Секция: hero ========== -->
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero__bg" aria-hidden="true"></div>
        <span class="hero__glow hero__glow--primary" aria-hidden="true"></span>
        <span class="hero__glow hero__glow--accent" aria-hidden="true"></span>

        <div class="hero__inner">
          <div class="hero__content">
            <p class="pill">
              <svg class="icon icon--xs pill__icon" aria-hidden="true">
                <use href="#i-coffee"></use>
              </svg>
              Specialty coffee since 2014
            </p>

            <h1 class="hero__title" id="hero-title">
              Everything<br />You Love<br />
              <span class="hero__title-accent">About Coffee</span>
            </h1>

            <div class="bean-divider" aria-hidden="true">
              <span class="bean-divider__line bean-divider__line--grow"></span>
              <svg class="icon icon--sm" aria-hidden="true">
                <use href="#i-coffee"></use>
              </svg>
              <span class="bean-divider__line bean-divider__line--short"></span>
            </div>

            <p class="hero__text">
              We make every day full of energy and taste. Sourced from
              sustainable farms across four continents — roasted with obsession.
            </p>

            <div class="hero__actions">
              <a class="button button--dark" href="catalog.html">
                Explore our beans
                <svg class="icon icon--sm button__arrow" aria-hidden="true">
                  <use href="#i-chevron-right"></use>
                </svg>
              </a>
              <a class="button button--ghost" href="contact.html"
                >Get in touch</a
              >
            </div>

            <div class="stats">
              <div class="stats__item">
                <p class="stats__value">50+</p>
                <p class="stats__label">Origins</p>
              </div>
              <div class="stats__item">
                <p class="stats__value">200k+</p>
                <p class="stats__label">Customers</p>
              </div>
              <div class="stats__item">
                <p class="stats__value">4.9 ★</p>
                <p class="stats__label">Avg rating</p>
              </div>
            </div>
          </div>

          <div class="hero__media">
            <figure class="hero__figure">
              <div class="hero__photo">
                <img
                  src="@/asserts/images/hero-cups-800x800.jpg"
                  alt="Espresso cup on a wooden table"
                  width="800"
                  height="800"
                  fetchpriority="high"
                  decoding="async"
                />
              </div>

              <!-- Компонент: float-card -->
              <figcaption class="float-card hero__float hero__float--pick">
                <span class="float-card__icon"
                  ><svg class="icon icon--sm" aria-hidden="true">
                    <use href="#i-coffee"></use></svg
                ></span>
                <span>
                  <span class="float-card__label">Today's pick</span>
                  <span class="float-card__value">Ethiopian Yirgacheffe</span>
                </span>
              </figcaption>

              <div
                class="float-card float-card--dark hero__float hero__float--cert"
              >
                <span class="float-card__label">Certified</span>
                <span class="float-card__value">
                  <svg class="icon icon--xs" aria-hidden="true">
                    <use href="#i-leaf"></use>
                  </svg>
                  Carbon neutral
                </span>
              </div>
            </figure>
          </div>
        </div>
      </section>
      <!-- ========== /hero ========== -->

      <!-- ========== Секция: about ========== -->
      <section
        class="section section--dark about"
        aria-labelledby="about-title"
      >
        <div class="about__inner">
          <figure class="about__media">
            <img
              class="about__image"
              src="@/asserts/images/barista-800x1000.jpg"
              alt="Barista pouring milk into a cup"
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
            />

            <figcaption class="award-card">
              <svg class="icon icon--lg award-card__icon" aria-hidden="true">
                <use href="#i-award"></use>
              </svg>
              <span class="award-card__text"
                >World Barista Championship finalist 2024</span
              >
            </figcaption>
          </figure>

          <div class="about__content">
            <p class="eyebrow eyebrow--on-dark">Our story</p>

            <h2 class="about__title" id="about-title">
              Crafted with purpose,
              <span class="about__accent">served with passion</span>
            </h2>

            <div class="bean-divider bean-divider--light" aria-hidden="true">
              <span class="bean-divider__line bean-divider__line--grow"></span>
              <svg class="icon icon--sm" aria-hidden="true">
                <use href="#i-coffee"></use>
              </svg>
              <span class="bean-divider__line bean-divider__line--short"></span>
            </div>

            <p class="about__text">
              Coffee House began in a small roastery in 2014 with one
              conviction: that great coffee changes your day. Today we partner
              directly with 40+ farms across Brazil, Ethiopia, Kenya, and
              Colombia — paying fair prices and investing in regenerative
              agriculture.
            </p>

            <p class="about__text">
              Every bag we ship is carbon-offset through our Forest Partnership
              program, working alongside Green Roots Africa and Café Verde
              Brasil to restore the ecosystems that make exceptional coffee
              possible.
            </p>

            <ul class="feature-list feature-list--on-dark">
              <li class="feature-list__item">
                <svg
                  class="icon icon--sm feature-list__icon"
                  aria-hidden="true"
                >
                  <use href="#i-leaf"></use>
                </svg>
                Direct trade
              </li>
              <li class="feature-list__item">
                <svg
                  class="icon icon--sm feature-list__icon"
                  aria-hidden="true"
                >
                  <use href="#i-leaf"></use>
                </svg>
                Carbon neutral
              </li>
              <li class="feature-list__item">
                <svg
                  class="icon icon--sm feature-list__icon"
                  aria-hidden="true"
                >
                  <use href="#i-award"></use>
                </svg>
                Award winning
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- ========== /about ========== -->

      <!-- ========== Секция: featured ========== -->
      <section class="section" aria-labelledby="featured-title">
        <div class="container">
          <header class="section-heading">
            <div>
              <p class="eyebrow">Top picks</p>
              <h2 class="section-heading__title" id="featured-title">
                Featured<br /><span class="section-heading__accent"
                  >selections</span
                >
              </h2>
            </div>

            <a
              class="button button--link section-heading__link"
              href="catalog.html"
            >
              View all beans
              <svg class="icon icon--sm button__arrow" aria-hidden="true">
                <use href="#i-chevron-right"></use>
              </svg>
            </a>
          </header>

          <div class="product-grid">
            <article class="product-card">
              <div class="product-card__media">
                <img
                  class="product-card__image"
                  src="@/asserts/images/solimo-600x450.jpg"
                  alt="Solimo Coffee Beans — roasted coffee beans"
                  width="600"
                  height="450"
                  loading="lazy"
                  decoding="async"
                />
                <span class="product-card__overlay" aria-hidden="true"></span>
                <span class="badge badge--popular product-card__flag"
                  >Popular</span
                >
              </div>

              <div class="product-card__body">
                <div class="product-card__head">
                  <div>
                    <h3 class="product-card__title">
                      <a class="product-card__link" href="product.html"
                        >Solimo Coffee Beans</a
                      >
                    </h3>
                    <p class="product-card__weight">2kg</p>
                  </div>

                  <p class="rating">
                    <svg
                      class="icon icon--2xs icon--filled rating__star"
                      aria-hidden="true"
                    >
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
                  <span class="badge badge--origin"
                    ><svg class="icon icon--2xs" aria-hidden="true">
                      <use href="#i-leaf"></use></svg
                    >Brazil</span
                  >
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

            <article class="product-card">
              <div class="product-card__media">
                <img
                  class="product-card__image"
                  src="@/asserts/images/presto-600x450.jpg"
                  alt="Presto Coffee Beans — roasted coffee beans"
                  width="600"
                  height="450"
                  loading="lazy"
                  decoding="async"
                />
                <span class="product-card__overlay" aria-hidden="true"></span>
                <span class="badge badge--popular product-card__flag"
                  >Popular</span
                >
              </div>

              <div class="product-card__body">
                <div class="product-card__head">
                  <div>
                    <h3 class="product-card__title">
                      <a class="product-card__link" href="product.html"
                        >Presto Coffee Beans</a
                      >
                    </h3>
                    <p class="product-card__weight">1kg</p>
                  </div>

                  <p class="rating">
                    <svg
                      class="icon icon--2xs icon--filled rating__star"
                      aria-hidden="true"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <span class="rating__value">4.7</span>
                  </p>
                </div>

                <p class="product-card__desc">
                  Bright acidity with blackcurrant and citrus blossom notes. A
                  dynamic cup that evolves as it cools.
                </p>

                <div class="product-card__badges">
                  <span class="badge badge--origin"
                    ><svg class="icon icon--2xs" aria-hidden="true">
                      <use href="#i-leaf"></use></svg
                    >Kenya</span
                  >
                  <span class="badge badge--roast-light">Light</span>
                </div>

                <div class="product-card__footer">
                  <p class="product-card__price">$22.99</p>
                  <span class="product-card__action" aria-hidden="true">
                    View
                    <svg class="icon icon--xs" aria-hidden="true">
                      <use href="#i-chevron-right"></use>
                    </svg>
                  </span>
                </div>
              </div>
            </article>

            <article class="product-card">
              <div class="product-card__media">
                <img
                  class="product-card__image"
                  src="@/asserts/images/yirgacheffe-600x450.jpg"
                  alt="Yirgacheffe Reserve — roasted coffee beans"
                  width="600"
                  height="450"
                  loading="lazy"
                  decoding="async"
                />
                <span class="product-card__overlay" aria-hidden="true"></span>
                <span class="badge badge--popular product-card__flag"
                  >Popular</span
                >
              </div>

              <div class="product-card__body">
                <div class="product-card__head">
                  <div>
                    <h3 class="product-card__title">
                      <a class="product-card__link" href="product.html"
                        >Yirgacheffe Reserve</a
                      >
                    </h3>
                    <p class="product-card__weight">500g</p>
                  </div>

                  <p class="rating">
                    <svg
                      class="icon icon--2xs icon--filled rating__star"
                      aria-hidden="true"
                    >
                      <use href="#i-star"></use>
                    </svg>
                    <span class="rating__value">4.9</span>
                  </p>
                </div>

                <p class="product-card__desc">
                  Floral jasmine notes with wine-like complexity and a long,
                  clean finish. A true connoisseur's cup.
                </p>

                <div class="product-card__badges">
                  <span class="badge badge--origin"
                    ><svg class="icon icon--2xs" aria-hidden="true">
                      <use href="#i-leaf"></use></svg
                    >Ethiopia</span
                  >
                  <span class="badge badge--roast-light">Light</span>
                </div>

                <div class="product-card__footer">
                  <p class="product-card__price">$28.50</p>
                  <span class="product-card__action" aria-hidden="true">
                    View
                    <svg class="icon icon--xs" aria-hidden="true">
                      <use href="#i-chevron-right"></use>
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <!-- ========== /featured ========== -->
    </main>

    <!-- ========== Компонент: footer ========== -->
    <footer class="footer">
      <div class="footer__inner">
        <a class="logo logo--inverse" href="index.html">
          <svg class="icon icon--md logo__icon" aria-hidden="true">
            <use href="#i-coffee"></use>
          </svg>
          Coffee House
        </a>

        <nav class="footer__nav" aria-label="Footer">
          <a class="footer__link" href="catalog.html">Our Coffee</a>
          <a class="footer__link" href="contact.html">Contact</a>
        </nav>

        <p class="footer__copy">
          &copy; 2026 Coffee House. All rights reserved.
        </p>
      </div>
    </footer>
    <!-- ========== /footer ========== -->
    </dev>
</template>

<style>
#app {
    width: 100%;
    height: 100%;
    background-color: #1d1f39;
    color: #fff;
}
</style>
