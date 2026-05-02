import { config } from '@vue/test-utils';
import ResizeObserver from 'resize-observer-polyfill';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Vuetifyインスタンスを作成
const vuetify = createVuetify({
  components,
  directives,
});

// Vue Test Utilsのglobal設定にプラグインとして追加
config.global.plugins = (config.global.plugins || []).concat([vuetify]);

// ResizeObserverのpolyfill
window.ResizeObserver = ResizeObserver;
