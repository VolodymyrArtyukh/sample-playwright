// test-options.ts
import { test as base, expect } from '@playwright/test';
import { NavigationPage } from './pages/NavigationPage';

export type Fixtures = {
    navigateTo: NavigationPage;
};

export const test = base.extend<Fixtures>({
    navigateTo: async ({ page }, use) => {
        await use(new NavigationPage(page));
    },
});

export { expect };
