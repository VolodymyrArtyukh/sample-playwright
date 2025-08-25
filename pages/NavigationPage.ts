import { Page, expect } from '@playwright/test';

export class NavigationPage {
    constructor(private readonly page: Page) {}

    async checkboxPage() {
        const chekboxButton = this.page.getByText('CheckBox').first();
        const checkboxPageText = this.page.locator('.content-header', {
            hasText: 'Checkbox Demo',
        });
        await chekboxButton.click();
        await expect(checkboxPageText).toHaveText('Checkbox Demo');
    }

    async radiobuttonPage() {
        const radioButton = this.page.getByText('Radio Button').first();
        const radiobuttonPageText = this.page.locator('.content-header', {
            hasText: 'Radio Button Demo',
        });
        await radioButton.click();
        await expect(radiobuttonPageText).toHaveText('Radio Button Demo');
    }

    async dropdownPage() {
        const dropdownButton = this.page.getByText('Dropdown');
        const dropdownPageText = this.page.locator('.content-header', {
            hasText: 'Dropdown Demo',
        });
        await dropdownButton.click();
        await expect(dropdownPageText).toHaveText('Dropdown Demo');
    }
}
