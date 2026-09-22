<template>
       <main class="page catalog" id="main">
      <!-- ========== Компонент: page-header ========== -->
      <div class="page-header">
        <div class="container">
          <p class="eyebrow eyebrow--on-dark">Our selection</p>
          <h1 class="page-header__title">About our <span class="page-header__accent">beans</span></h1>
          <div class="page-header__divider">
            <div class="bean-divider bean-divider--light" aria-hidden="true">
              <span class="bean-divider__line bean-divider__line--grow"></span>
              <svg class="icon icon--sm" aria-hidden="true"><use href="#i-coffee"></use></svg>
              <span class="bean-divider__line bean-divider__line--short"></span>
            </div>
          </div>
        </div>
      </div>
      <!-- ========== /page-header ========== -->

      <!-- ========== Компонент: toolbar (поиск + фильтры + сортировка) ========== -->
      <div class="toolbar">
        <div class="toolbar__inner">
          <!-- Компонент: search -->
          <div class="search" data-search>
            <label class="visually-hidden" for="catalog-search">Search coffee</label>
            <svg class="icon icon--sm search__icon" aria-hidden="true"><use href="#i-search"></use></svg>
            <input
              class="search__input"
              id="catalog-search"
              type="search"
              name="q"
              placeholder="Start typing a name..."
              autocomplete="off"
              aria-describedby="search-hint"
              aria-expanded="false"
              aria-controls="search-suggestions"
              data-search-input
            />
            <p class="visually-hidden" id="search-hint">Suggestions appear as you type</p>

            <button class="search__clear" type="button" aria-label="Clear search" data-search-clear>
              <svg class="icon icon--xs" aria-hidden="true"><use href="#i-x"></use></svg>
            </button>

            <!-- Компонент: suggestions (состояние .is-open) -->
            <ul class="suggestions" id="search-suggestions" data-search-suggestions>
              <li>
                <a class="suggestions__item" href="product.html">
                  <span class="suggestions__thumb">
                    <img src="@/assets/images/solimo-80x80.jpg" alt="" width="80" height="80" loading="lazy" />
                  </span>
                  <span class="suggestions__body">
                    <span class="suggestions__title">Solimo Coffee Beans</span>
                    <span class="suggestions__meta">Brazil · 2kg</span>
                  </span>
                  <span class="suggestions__price">$34.99</span>
                </a>
              </li>
              <li>
                <a class="suggestions__item" href="product.html">
                  <span class="suggestions__thumb">
                    <img src="@/assets/images/presto-80x80.jpg" alt="" width="80" height="80" loading="lazy" />
                  </span>
                  <span class="suggestions__body">
                    <span class="suggestions__title">Presto Coffee Beans</span>
                    <span class="suggestions__meta">Kenya · 1kg</span>
                  </span>
                  <span class="suggestions__price">$22.99</span>
                </a>
              </li>
              <li>
                <a class="suggestions__item" href="product.html">
                  <span class="suggestions__thumb">
                    <img src="@/assets/images/aromistico-80x80.jpg" alt="" width="80" height="80" loading="lazy" />
                  </span>
                  <span class="suggestions__body">
                    <span class="suggestions__title">AROMISTICO Coffee</span>
                    <span class="suggestions__meta">Colombia · 1kg</span>
                  </span>
                  <span class="suggestions__price">$19.99</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="toolbar__row">
            <svg class="icon icon--xs toolbar__icon" aria-hidden="true">
              <use href="#i-sliders-horizontal"></use>
            </svg>
            <button class="filter-chip" type="button" aria-pressed="true" data-filter>All</button>
            <button class="filter-chip" type="button" aria-pressed="false" data-filter>Brazil</button>
            <button class="filter-chip" type="button" aria-pressed="false" data-filter>Kenya</button>
            <button class="filter-chip" type="button" aria-pressed="false" data-filter>Colombia</button>
            <button class="filter-chip" type="button" aria-pressed="false" data-filter>Ethiopia</button>
          </div>
        </div>
      </div>
      <!-- ========== /toolbar ========== -->

      <div class="catalog__results">
        <p class="results-count">8 products found</p>

        <div class="product-grid">
          <article class="product-card">
            <div class="product-card__media">
              <img
                class="product-card__image"
                src="@/assets/images/solimo-600x450.jpg"
                alt="Solimo Coffee Beans — roasted coffee beans"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
              />
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
                Rich, full-bodied with notes of dark chocolate and caramel. Perfect for espresso and French
                press brewing.
              </p>

              <div class="product-card__badges">
                <span class="badge badge--origin"
                  ><svg class="icon icon--2xs" aria-hidden="true"><use href="#i-leaf"></use></svg>Brazil</span
                >
                <span class="badge badge--roast-md-dark">Medium Dark</span>
              </div>

              <div class="product-card__footer">
                <p class="product-card__price">$34.99</p>
                <span class="product-card__action" aria-hidden="true">
                  View <svg class="icon icon--xs" aria-hidden="true"><use href="#i-chevron-right"></use></svg>
                </span>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__media">
              <img
                class="product-card__image"
                src="@/assets/images/presto-600x450.jpg"
                alt="Presto Coffee Beans — roasted coffee beans"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
              />
              <span class="product-card__overlay" aria-hidden="true"></span>
              <span class="badge badge--popular product-card__flag">Popular</span>
            </div>

            <div class="product-card__body">
              <div class="product-card__head">
                <div>
                  <h3 class="product-card__title">
                    <a class="product-card__link" href="product.html">Presto Coffee Beans</a>
                  </h3>
                  <p class="product-card__weight">1kg</p>
                </div>

                <p class="rating">
                  <svg class="icon icon--2xs icon--filled rating__star" aria-hidden="true">
                    <use href="#i-star"></use>
                  </svg>
                  <span class="rating__value">4.7</span>
                </p>
              </div>

              <p class="product-card__desc">
                Bright acidity with blackcurrant and citrus blossom notes. A dynamic cup that evolves as it
                cools.
              </p>

              <div class="product-card__badges">
                <span class="badge badge--origin"
                  ><svg class="icon icon--2xs" aria-hidden="true"><use href="#i-leaf"></use></svg>Kenya</span
                >
                <span class="badge badge--roast-light">Light</span>
              </div>

              <div class="product-card__footer">
                <p class="product-card__price">$22.99</p>
                <span class="product-card__action" aria-hidden="true">
                  View <svg class="icon icon--xs" aria-hidden="true"><use href="#i-chevron-right"></use></svg>
                </span>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__media">
              <img
                class="product-card__image"
                src="@/assets/images/aromistico-600x450.jpg"
                alt="AROMISTICO Coffee — roasted coffee beans"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
              />
              <span class="product-card__overlay" aria-hidden="true"></span>
            </div>

            <div class="product-card__body">
              <div class="product-card__head">
                <div>
                  <h3 class="product-card__title">
                    <a class="product-card__link" href="product.html">AROMISTICO Coffee</a>
                  </h3>
                  <p class="product-card__weight">1kg</p>
                </div>

                <p class="rating">
                  <svg class="icon icon--2xs icon--filled rating__star" aria-hidden="true">
                    <use href="#i-star"></use>
                  </svg>
                  <span class="rating__value">4.6</span>
                </p>
              </div>

              <p class="product-card__desc">
                Smooth sweetness with hints of red fruits and roasted nuts. Balanced and approachable for all
                brewing methods.
              </p>

              <div class="product-card__badges">
                <span class="badge badge--origin"
                  ><svg class="icon icon--2xs" aria-hidden="true"><use href="#i-leaf"></use></svg
                  >Colombia</span
                >
                <span class="badge badge--roast-medium">Medium</span>
              </div>

              <div class="product-card__footer">
                <p class="product-card__price">$19.99</p>
                <span class="product-card__action" aria-hidden="true">
                  View <svg class="icon icon--xs" aria-hidden="true"><use href="#i-chevron-right"></use></svg>
                </span>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__media">
              <img
                class="product-card__image"
                src="@/assets/images/yirgacheffe-600x450.jpg"
                alt="Yirgacheffe Reserve — roasted coffee beans"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
              />
              <span class="product-card__overlay" aria-hidden="true"></span>
              <span class="badge badge--popular product-card__flag">Popular</span>
            </div>

            <div class="product-card__body">
              <div class="product-card__head">
                <div>
                  <h3 class="product-card__title">
                    <a class="product-card__link" href="product.html">Yirgacheffe Reserve</a>
                  </h3>
                  <p class="product-card__weight">500g</p>
                </div>

                <p class="rating">
                  <svg class="icon icon--2xs icon--filled rating__star" aria-hidden="true">
                    <use href="#i-star"></use>
                  </svg>
                  <span class="rating__value">4.9</span>
                </p>
              </div>

              <p class="product-card__desc">
                Floral jasmine notes with wine-like complexity and a long, clean finish. A true connoisseur's
                cup.
              </p>

              <div class="product-card__badges">
                <span class="badge badge--origin"
                  ><svg class="icon icon--2xs" aria-hidden="true"><use href="#i-leaf"></use></svg
                  >Ethiopia</span
                >
                <span class="badge badge--roast-light">Light</span>
              </div>

              <div class="product-card__footer">
                <p class="product-card__price">$28.50</p>
                <span class="product-card__action" aria-hidden="true">
                  View <svg class="icon icon--xs" aria-hidden="true"><use href="#i-chevron-right"></use></svg>
                </span>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__media">
              <img
                class="product-card__image"
                src="@/assets/images/santos-600x450.jpg"
                alt="Santos Blend Premium — roasted coffee beans"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
              />
              <span class="product-card__overlay" aria-hidden="true"></span>
            </div>

            <div class="product-card__body">
              <div class="product-card__head">
                <div>
                  <h3 class="product-card__title">
                    <a class="product-card__link" href="product.html">Santos Blend Premium</a>
                  </h3>
                  <p class="product-card__weight">1kg</p>
                </div>

                <p class="rating">
                  <svg class="icon icon--2xs icon--filled rating__star" aria-hidden="true">
                    <use href="#i-star"></use>
                  </svg>
                  <span class="rating__value">4.5</span>
                </p>
              </div>

              <p class="product-card__desc">
                Nutty and low-acid — the perfect espresso base for milk drinks. Consistent, bold, and reliably
                delicious.
              </p>

              <div class="product-card__badges">
                <span class="badge badge--origin"
                  ><svg class="icon icon--2xs" aria-hidden="true"><use href="#i-leaf"></use></svg>Brazil</span
                >
                <span class="badge badge--roast-dark">Dark</span>
              </div>

              <div class="product-card__footer">
                <p class="product-card__price">$17.99</p>
                <span class="product-card__action" aria-hidden="true">
                  View <svg class="icon icon--xs" aria-hidden="true"><use href="#i-chevron-right"></use></svg>
                </span>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__media">
              <img
                class="product-card__image"
                src="@/assets/images/nyeri-600x450.jpg"
                alt="Nyeri AA Peaberry — roasted coffee beans"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
              />
              <span class="product-card__overlay" aria-hidden="true"></span>
            </div>

            <div class="product-card__body">
              <div class="product-card__head">
                <div>
                  <h3 class="product-card__title">
                    <a class="product-card__link" href="product.html">Nyeri AA Peaberry</a>
                  </h3>
                  <p class="product-card__weight">250g</p>
                </div>

                <p class="rating">
                  <svg class="icon icon--2xs icon--filled rating__star" aria-hidden="true">
                    <use href="#i-star"></use>
                  </svg>
                  <span class="rating__value">4.8</span>
                </p>
              </div>

              <p class="product-card__desc">
                Intense tomato-like brightness with a crisp, clean finish. Peaberry beans concentrate flavour
                into a single oval seed.
              </p>

              <div class="product-card__badges">
                <span class="badge badge--origin"
                  ><svg class="icon icon--2xs" aria-hidden="true"><use href="#i-leaf"></use></svg>Kenya</span
                >
                <span class="badge badge--roast-light">Light</span>
              </div>

              <div class="product-card__footer">
                <p class="product-card__price">$32.00</p>
                <span class="product-card__action" aria-hidden="true">
                  View <svg class="icon icon--xs" aria-hidden="true"><use href="#i-chevron-right"></use></svg>
                </span>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__media">
              <img
                class="product-card__image"
                src="@/assets/images/huila-600x450.jpg"
                alt="Huila Washed — roasted coffee beans"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
              />
              <span class="product-card__overlay" aria-hidden="true"></span>
            </div>

            <div class="product-card__body">
              <div class="product-card__head">
                <div>
                  <h3 class="product-card__title">
                    <a class="product-card__link" href="product.html">Huila Washed</a>
                  </h3>
                  <p class="product-card__weight">1kg</p>
                </div>

                <p class="rating">
                  <svg class="icon icon--2xs icon--filled rating__star" aria-hidden="true">
                    <use href="#i-star"></use>
                  </svg>
                  <span class="rating__value">4.7</span>
                </p>
              </div>

              <p class="product-card__desc">
                Brown sugar sweetness, apple tartness, and a silky vanilla finish. An everyday specialty that
                never disappoints.
              </p>

              <div class="product-card__badges">
                <span class="badge badge--origin"
                  ><svg class="icon icon--2xs" aria-hidden="true"><use href="#i-leaf"></use></svg
                  >Colombia</span
                >
                <span class="badge badge--roast-medium">Medium</span>
              </div>

              <div class="product-card__footer">
                <p class="product-card__price">$24.99</p>
                <span class="product-card__action" aria-hidden="true">
                  View <svg class="icon icon--xs" aria-hidden="true"><use href="#i-chevron-right"></use></svg>
                </span>
              </div>
            </div>
          </article>

          <article class="product-card">
            <div class="product-card__media">
              <img
                class="product-card__image"
                src="@/assets/images/sidama-600x450.jpg"
                alt="Sidama Natural — roasted coffee beans"
                width="600"
                height="450"
                loading="lazy"
                decoding="async"
              />
              <span class="product-card__overlay" aria-hidden="true"></span>
            </div>

            <div class="product-card__body">
              <div class="product-card__head">
                <div>
                  <h3 class="product-card__title">
                    <a class="product-card__link" href="product.html">Sidama Natural</a>
                  </h3>
                  <p class="product-card__weight">500g</p>
                </div>

                <p class="rating">
                  <svg class="icon icon--2xs icon--filled rating__star" aria-hidden="true">
                    <use href="#i-star"></use>
                  </svg>
                  <span class="rating__value">4.6</span>
                </p>
              </div>

              <p class="product-card__desc">
                Blueberry jam, dark chocolate, and tropical dried fruit sweetness. Wild and expressive —
                unlike anything you've tasted.
              </p>

              <div class="product-card__badges">
                <span class="badge badge--origin"
                  ><svg class="icon icon--2xs" aria-hidden="true"><use href="#i-leaf"></use></svg
                  >Ethiopia</span
                >
                <span class="badge badge--roast-medium">Medium</span>
              </div>

              <div class="product-card__footer">
                <p class="product-card__price">$26.00</p>
                <span class="product-card__action" aria-hidden="true">
                  View <svg class="icon icon--xs" aria-hidden="true"><use href="#i-chevron-right"></use></svg>
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- ========== Компонент: empty-state ==========
         Показывается вместо .product-grid, когда выборка пустая.
         Разметка оставлена в потоке с hidden — снимите атрибут, чтобы увидеть. -->
      <div class="catalog__results" hidden>
        <div class="empty-state">
          <span class="empty-state__icon"
            ><svg class="icon icon--2xl" aria-hidden="true"><use href="#i-coffee"></use></svg
          ></span>
          <h2 class="empty-state__title">Nothing found</h2>
          <p class="empty-state__text">
            No coffee matches your search. Try adjusting the filters or clearing the search field.
          </p>
          <button class="button button--primary button--sm empty-state__action" type="button">
            Reset all filters
          </button>
        </div>
      </div>
      <!-- ========== /empty-state ========== -->
    </main>
</template>