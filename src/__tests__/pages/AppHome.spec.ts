import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AppHome from '../../pages/AppHome.vue';

function render() {
  return mount(
    {
      template: '<v-layout><app-home></app-home></v-layout>',
    },
    {
      props: {},
      global: {
        components: {
          AppHome,
        },
      },
    },
  );
}
describe('AppHome', () => {
  describe('fizBazz機能', () => {
    it('初期表示時はボタンとカウントが表示されており、fizBazzの記録は表示されない', () => {
      const wrapper = render();

      expect(wrapper.find('[data-testid="fizbazz_countup_btn"]').exists()).toBe(true);

      expect(wrapper.find('[data-testid="fizbazz_counter"]').text()).toBe('0');
      expect(wrapper.find('[data-testid="fizbazz_item_container"]').text()).toBe('');
    });
    it('ボタンを1回押下するとカウントが1になる', async () => {
      const wrapper = render();
      const countupBtn = wrapper.find('[data-testid="fizbazz_countup_btn"]');
      await countupBtn.trigger('click');

      expect(wrapper.find('[data-testid="fizbazz_counter"]').text()).toBe('1');
      expect(wrapper.find('[data-testid="fizbazz_item_container"]').text()).toBe('');
    });
    it.each([
      [3, 'fiz'],
      [5, 'bazz'],
      [15, 'fizBazz'],
    ])('ボタンを%s回押下した場合、%sが表示される', async (count, str) => {
      const wrapper = render();
      const countupBtn = wrapper.find('[data-testid="fizbazz_countup_btn"]');
      for (let i = 0; i < count; ++i) {
        await countupBtn.trigger('click');
      }

      // カウンターが増えていること
      expect(wrapper.find('[data-testid="fizbazz_counter"]').text()).toBe(`${count}`);
      // fizBazzが表示されていること
      expect(wrapper.find(`[data-testid="fizbazz_${count}${str}"]`).exists()).toBe(true);
    });
  });
});
