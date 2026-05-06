import { expect, test } from '@playwright/test';

test.describe('/のテスト', () => {
  test('初期表示', async ({ page }) => {
    // 移動
    await page.goto('/');

    // --- タイトル ---
    await expect(page).toHaveTitle(/ホームページ/);
    // --- ヘッダー ---
    await expect(page.getByRole('heading', { name: 'home' })).toBeAttached();
    // --- カレンダー遷移ボタン ---
    await expect(page.getByRole('button', { name: 'カレンダー' })).toBeAttached();
    // --- fizBazz機能 ---
    await expect(page.getByTestId('fizbazz_countup_btn')).toBeAttached();
    await expect(page.getByTestId('fizbazz_counter')).toHaveText('0');
    await expect(page.getByTestId('fizbazz_item_container')).toBeEmpty();
  });

  test('カレンダーボタンを押下するとカレンダー画面に遷移する', async ({ page }) => {
    // 移動
    await page.goto('/');
    await page.getByRole('button', { name: 'カレンダー' }).click();

    await expect(page).toHaveURL('/calendar');
  });
});
