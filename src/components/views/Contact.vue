<template>
       <main class="page contact" id="main">
      <!-- ========== Компонент: page-header (вариант с фото) ========== -->
      <div class="page-header page-header--media">
        <div class="page-header__media" aria-hidden="true">
          <img
            class="page-header__image"
            src="@/assets/images/cafe-interior-1600x700.jpg"
            alt=""
            width="1600"
            height="700"
            fetchpriority="high"
            decoding="async"
          />
          <span class="page-header__scrim"></span>
        </div>

        <div class="page-header__content">
          <div class="container">
            <h1 class="page-header__title">Contact <span class="page-header__accent">us</span></h1>
          </div>
        </div>
      </div>
      <!-- ========== /page-header ========== -->

      <div class="contact__inner">
        <!-- ========== Колонка: форма ========== -->
        <section aria-labelledby="contact-title">
          <h2 class="contact__title" id="contact-title">
            Tell us about your <span class="contact__accent">tastes</span>
          </h2>

          <div class="contact__divider">
            <div class="bean-divider" aria-hidden="true">
              <span class="bean-divider__line bean-divider__line--grow"></span>
              <svg class="icon icon--sm" aria-hidden="true"><use href="#i-coffee"></use></svg>
              <span class="bean-divider__line bean-divider__line--short"></span>
            </div>
          </div>

          <p class="contact__lead">We'll handpick a selection tailored just for you.</p>

          <!-- Компонент: form.
             Состояние ошибки поля — класс is-invalid на .form-field.
             Состояние отправки — класс is-loading на кнопке. -->
          <form class="form" action="#" method="post" novalidate>
            <div class="form-field">
              <label class="form-field__label" for="contact-name"
                >Name <span class="form-field__required" aria-hidden="true">*</span></label
              >
              <input
                class="form-field__control"
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
                aria-describedby="contact-name-error"
              />
              <p class="form-field__error" id="contact-name-error">
                <svg class="icon icon--2xs" aria-hidden="true"><use href="#i-triangle-alert"></use></svg>
                Name is required
              </p>
            </div>

            <div class="form-field">
              <label class="form-field__label" for="contact-email"
                >E-mail <span class="form-field__required" aria-hidden="true">*</span></label
              >
              <input
                class="form-field__control"
                id="contact-email"
                name="email"
                type="email"
                placeholder="hello@example.com"
                required
                aria-describedby="contact-email-error"
              />
              <p class="form-field__error" id="contact-email-error">
                <svg class="icon icon--2xs" aria-hidden="true"><use href="#i-triangle-alert"></use></svg>
                Enter a valid email address
              </p>
            </div>

            <div class="form-field">
              <label class="form-field__label" for="contact-phone">Phone</label>
              <input
                class="form-field__control"
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                autocomplete="tel"
              />
            </div>

            <div class="form-field">
              <label class="form-field__label" for="contact-message"
                >Your message <span class="form-field__required" aria-hidden="true">*</span></label
              >
              <textarea
                class="form-field__control form-field__control--textarea"
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Leave your comments here..."
                required
                aria-describedby="contact-message-error"
              ></textarea>
              <p class="form-field__error" id="contact-message-error">
                <svg class="icon icon--2xs" aria-hidden="true"><use href="#i-triangle-alert"></use></svg>
                Message is required
              </p>
            </div>

            <div class="form__actions">
              <button class="button button--primary button--block" type="submit">
                <svg class="icon icon--sm" aria-hidden="true"><use href="#i-send"></use></svg>
                <span class="button__label-idle">Send us</span>
                <svg class="icon icon--sm button__spinner" aria-hidden="true">
                  <use href="#i-loader-circle"></use>
                </svg>
                <span class="button__label-loading">Sending...</span>
              </button>
            </div>
          </form>

          <!-- ========== Компонент: success (экран после отправки) ==========
             Снимите hidden, чтобы посмотреть состояние успеха. -->
          <div class="success" hidden>
            <span class="success__mark">
              <span class="success__ring" aria-hidden="true"></span>
              <span class="success__ring success__ring--outer" aria-hidden="true"></span>
              <span class="success__mark-inner"
                ><svg class="icon icon--xl icon--bold" aria-hidden="true"><use href="#i-check"></use></svg
              ></span>
            </span>

            <p class="eyebrow">Message sent</p>
            <h3 class="success__title">Thank you!</h3>
            <div class="bean-divider bean-divider--center" aria-hidden="true">
              <span class="bean-divider__line bean-divider__line--grow"></span>
              <svg class="icon icon--sm" aria-hidden="true"><use href="#i-coffee"></use></svg>
              <span class="bean-divider__line bean-divider__line--short"></span>
            </div>
            <p class="success__text">
              We've received your message and will get back to you within 24 hours. In the meantime, why not
              explore our latest beans?
            </p>
            <button class="button button--underline" type="button">Send another message</button>
          </div>
          <!-- ========== /success ========== -->
        </section>

        <!-- ========== Колонка: контакты ========== -->
        <aside class="contact__aside" aria-label="Contact details">
          <!-- Компонент: info-card -->
          <div class="info-card">
            <h2 class="info-card__title">Find us here</h2>

            <ul class="info-card__list">
              <li class="info-item">
                <span class="info-item__icon"
                  ><svg class="icon icon--sm" aria-hidden="true"><use href="#i-map-pin"></use></svg
                ></span>
                <div>
                  <p class="info-item__label">Address</p>
                  <p class="info-item__value">42 Roaster's Lane<br />Portland, OR 97201</p>
                </div>
              </li>
              <li class="info-item">
                <span class="info-item__icon"
                  ><svg class="icon icon--sm" aria-hidden="true"><use href="#i-phone"></use></svg
                ></span>
                <div>
                  <p class="info-item__label">Phone</p>
                  <a class="info-item__value info-item__link" href="tel:+15032248600">+1 (503) 224-8600</a>
                </div>
              </li>
              <li class="info-item">
                <span class="info-item__icon"
                  ><svg class="icon icon--sm" aria-hidden="true"><use href="#i-mail"></use></svg
                ></span>
                <div>
                  <p class="info-item__label">Email</p>
                  <a class="info-item__value info-item__link" href="mailto:hello@coffeehouse.com"
                    >hello@coffeehouse.com</a
                  >
                </div>
              </li>
              <li class="info-item">
                <span class="info-item__icon"
                  ><svg class="icon icon--sm" aria-hidden="true"><use href="#i-clock"></use></svg
                ></span>
                <div>
                  <p class="info-item__label">Hours</p>
                  <p class="info-item__value">Mon–Fri 7am – 7pm<br />Sat–Sun 8am – 6pm</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Компонент: map-embed (статичная заглушка карты) -->
          <div class="map-embed">
            <img
              class="map-embed__image"
              src="@/assets/images/map-800x600.jpg"
              alt="Map of the roastery neighbourhood"
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
            />
            <span class="map-embed__pin"
              ><svg class="icon icon--2xl" aria-hidden="true"><use href="#i-map-pin"></use></svg
            ></span>
          </div>
        </aside>
      </div>
    </main>
</template>