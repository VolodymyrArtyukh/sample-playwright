import { test } from '../test-options';

test.describe('Navigation Left Panel Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(process.env.URL as string);
    });

    test('navigate to CheckBox page', { tag: '@Regression' }, async ({ navigateTo }) => {
        await navigateTo.checkboxPage();
    });

    test('navigate to RadioButton page', { tag: '@Regression' }, async ({ navigateTo }) => {
        await navigateTo.radiobuttonPage();
    });

    test('navigate to DropDown page', { tag: '@Regression' }, async ({ navigateTo }) => {
        await navigateTo.dropdownPage();
    });
});
