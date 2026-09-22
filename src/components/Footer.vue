<template>
  <!-- ========== Компонент: footer ========== -->
  <footer class="footer">
    <div class="footer__inner">
      <RouterLink to="/" class="logo">
        <svg class="icon icon--md logo__icon" aria-hidden="true">
          <use href="#i-coffee"></use>
        </svg>
        Coffee House
      </RouterLink>

      <nav class="footer__nav" aria-label="Footer">
        <RouterLink to="/catalog" active-class="footer__link">
          Our Coffee
        </RouterLink>
        <RouterLink to="/contact" active-class="footer__link">
          Contact
        </RouterLink>
      </nav>

      <p class="footer__copy">
        &copy; 2026 Coffee House. All rights reserved.
      </p>
    </div>
  </footer>
  <!-- ========== /footer ========== -->
</template>

<style lang="scss" scoped>
// =============================================================================
// Блок: footer
// =============================================================================
@use '@/assets/styles/abstracts' as *;

.footer {
  flex-shrink: 0;
  padding-block: clamp(2rem, 1.5rem + 2vw, 3rem);
  background-color: var(--color-bg-dark);
  color: var(--color-text-inverse);

  &__inner {
    @include container;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;

    @include from(md) {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: clamp(1rem, 0.5rem + 1.5vw, 1.75rem);
  }

  &__link {
    font-size: var(--text-sm);
    color: rgb(212 165 116 / 0.75);
    border-radius: var(--radius-xs);
    transition: color var(--duration-fast) var(--ease-out);
    @include focus-ring(var(--color-secondary));

    &:hover {
      color: var(--color-secondary);
    }

    &:active {
      color: var(--color-primary);
    }
  }

  &__copy {
    font-size: var(--text-xs);
    color: rgb(212 165 116 / 0.5);
  }
}
</style>