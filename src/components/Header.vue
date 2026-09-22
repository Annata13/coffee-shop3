<template>
    <!-- ========== Компонент: header ========== -->
    <header class="header">
        <div class="header__inner">
            <RouterLink to="/" class="logo">
                <svg class="icon icon--lg logo__icon" aria-hidden="true">
                    <use href="#i-coffee"></use>
                </svg>
                Coffee Hous
            </RouterLink>

            <nav class="header__nav" aria-label="Main">
                <RouterLink to="/catalog" class="header__link" active-class="header__link--active"
                    exact-active-class="header__link--active">
                    Our Coffee
                </RouterLink>
                <RouterLink to="/" class="header__link" active-class="header__link--active"
                    exact-active-class="header__link--active">
                    For your pleasure
                </RouterLink>
                <RouterLink to="/contact" class="header__link" active-class="header__link--active"
                    exact-active-class="header__link--active">
                    Contact
                </RouterLink>
            </nav>

            <button class="header__burger" type="button" aria-label="Open menu" aria-expanded="false"
                aria-controls="mobile-menu" data-menu-toggle>
                <svg class="icon icon--lg header__burger-icon header__burger-icon--menu" aria-hidden="true">
                    <use href="#i-menu"></use>
                </svg>
                <svg class="icon icon--lg header__burger-icon header__burger-icon--close" aria-hidden="true">
                    <use href="#i-x"></use>
                </svg>
            </button>
        </div>

        <div class="header__mobile" id="mobile-menu" data-menu-panel>
            <div class="header__mobile-inner">
                <nav class="mobile-nav" aria-label="Mobile">
                    <RouterLink to="/catalog" class="mobile-nav__link" active-class="mobile-nav__link--active"
                        exact-active-class="mobile-nav__link--active">
                        Our Coffee
                    </RouterLink>
                    <RouterLink to="/" class="mobile-nav__link" active-class="mobile-nav__link--active"
                        exact-active-class="mobile-nav__link--active">
                        For your pleasure
                    </RouterLink>
                    <RouterLink to="/contact" class="mobile-nav__link" active-class="mobile-nav__link--active"
                        exact-active-class="mobile-nav__link--active">
                        Contact
                    </RouterLink>
                </nav>
            </div>
        </div>
    </header>
    <!-- ========== /header ========== -->

</template>

<style lang="scss" scoped>
// =============================================================================
// Блок: header — фиксированная шапка со стеклянной подложкой.
// =============================================================================
@use '@/assets/styles/abstracts' as *;

.header {
    position: fixed;
    inset: 0 0 auto;
    z-index: var(--z-header);
    border-bottom: 1px solid var(--color-border);
    @include glass(rgb(245 230 211 / 0.9), 14px);

    &__inner {
        @include container;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        min-height: var(--header-height);
    }

    &__nav {
        display: none;

        @include from(md) {
            display: flex;
            align-items: center;
            gap: clamp(1.25rem, 0.5rem + 2vw, 2.5rem);
        }
    }

    &__link {
        position: relative;
        padding-block: 0.35rem;
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text-muted);
        border-radius: var(--radius-xs);
        transition: color var(--duration-fast) var(--ease-out);
        @include focus-ring;

        // Подчёркивание растёт от центра — на hover и на активном пункте.
        &::after {
            content: '';
            position: absolute;
            inset: auto 0 0;
            height: 2px;
            border-radius: var(--radius-pill);
            background-color: currentcolor;
            transform: scaleX(0);
            transform-origin: center;
            transition: transform var(--duration-normal) var(--ease-out);
        }

        &:hover {
            color: var(--color-text);

            &::after {
                transform: scaleX(1);
            }
        }

        &:active {
            color: var(--color-primary-active);
        }

        &--active {
            color: var(--color-primary);

            &::after {
                transform: scaleX(1);
            }
        }
    }

    // Кнопка-бургер живёт только на мобильных.
    &__burger {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.75rem;
        height: 2.75rem;
        border-radius: var(--radius-sm);
        color: var(--color-text);
        transition:
            background-color var(--duration-fast) var(--ease-out),
            transform var(--duration-fast) var(--ease-out);
        @include focus-ring(var(--color-ring), 2px);

        &:hover {
            background-color: rgb(212 165 116 / 0.25);
        }

        &:active {
            transform: scale(0.94);
        }

        @include from(md) {
            display: none;
        }

        .header__burger-icon--close {
            display: none;
        }

        &[aria-expanded='true'] {
            .header__burger-icon--menu {
                display: none;
            }

            .header__burger-icon--close {
                display: block;
            }
        }
    }

    // Выпадающее меню: анимируем grid-template-rows, чтобы не хардкодить высоту.
    &__mobile {
        display: grid;
        grid-template-rows: 0fr;
        background-color: var(--color-bg);
        transition: grid-template-rows var(--duration-normal) var(--ease-out);

        @include from(md) {
            display: none;
        }

        &.is-open {
            grid-template-rows: 1fr;
            border-top: 1px solid var(--color-border);
        }
    }

    // overflow живёт на внутреннем элементе: иначе анимация grid-строки
    // схлопывает панель в ноль и меню не раскрывается.
    &__mobile-inner {
        min-height: 0;
        overflow: hidden;
    }
}

// Блок: logo
.logo {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-serif);
    font-size: 1.25rem;
    color: var(--color-text);
    border-radius: var(--radius-xs);
    transition: opacity var(--duration-fast) var(--ease-out);
    @include focus-ring;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.55;
    }

    &__icon {
        color: var(--color-primary);
    }

    &--inverse {
        color: var(--color-text-inverse);
        font-size: 1.15rem;
    }
}

// Блок: mobile-nav
.mobile-nav {
    @include container;
    display: flex;
    flex-direction: column;
    padding-block: 0.5rem 1rem;

    &__link {
        padding-block: 0.85rem;
        font-size: var(--text-sm);
        font-weight: 500;
        color: var(--color-text-muted);
        border-bottom: 1px solid rgb(212 165 116 / 0.25);
        transition: color var(--duration-fast) var(--ease-out);
        @include focus-ring(var(--color-ring), -2px);

        &:last-child {
            border-bottom: none;
        }

        &:hover {
            color: var(--color-text);
        }

        &:active {
            color: var(--color-primary-active);
        }

        &--active {
            color: var(--color-primary);
        }
    }
}
</style>