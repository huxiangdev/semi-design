import 'reset-css';
import 'normalize.css';
import React from 'react';
import { StoryContext } from '@storybook/react';

import { ConfigProvider } from '../../packages/semi-ui/index';
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB';
import ko_KR from '@douyinfe/semi-ui/lib/es/locale/source/ko_KR';
import ja_JP from '@douyinfe/semi-ui/lib/es/locale/source/ja_JP';
import ar from '@douyinfe/semi-ui/lib/es/locale/source/ar';
import vi_VN from '@douyinfe/semi-ui/lib/es/locale/source/vi_VN';
import ru_RU from '@douyinfe/semi-ui/lib/es/locale/source/ru_RU';
import id_ID from '@douyinfe/semi-ui/lib/es/locale/source/id_ID';
import ms_MY from '@douyinfe/semi-ui/lib/es/locale/source/ms_MY';
import th_TH from '@douyinfe/semi-ui/lib/es/locale/source/th_TH';
import tr_TR from '@douyinfe/semi-ui/lib/es/locale/source/tr_TR';
import pt_BR from '@douyinfe/semi-ui/lib/es/locale/source/pt_BR';
import zh_TW from '@douyinfe/semi-ui/lib/es/locale/source/zh_TW';
import es from '@douyinfe/semi-ui/lib/es/locale/source/es';

export const globalTypes = {
    direction: {
        name: 'Direction',
        description: 'RTL direction',
        defaultValue: 'ltr',
        toolbar: {
            icon: 'globe',
            items: ['ltr', 'rtl'],
        },
    },
    theme: {
        name: 'Theme',
        description: 'Theme mode',
        defaultValue: 'light',
        toolbar: {
            icon: 'circle',
            items: ['light', 'dark'],
        },
    },
    language: {
      name: 'Locale',
      description: 'Locale language',
      defaultValue: 'zh_CN',
      toolbar: {
          icon: 'google',
          items:  ['zh_CN', 'en_GB', 'ko_KR', 'ja_JP', 'ar', 'vi_VN', 'ru_RU', 'id_ID', 'ms_MY', 'th_TH', 'tr_TR', 'pt_BR', 'zh_TW', 'es'],
      },
    }
};

const switchMode = (theme: 'light' | 'dark') => {
    const body = document.body;
    body.setAttribute('theme-mode', theme);
};

const getLocale = code => {
  let language = {
      'zh_CN': zh_CN,
      'en_GB': en_GB,
      'ko_KR': ko_KR,
      'ja_JP': ja_JP,
      'ar': ar,
      'vi_VN': vi_VN,
      'ru_RU': ru_RU,
      'id_ID': id_ID,
      'ms_MY': ms_MY,
      'th_TH': th_TH,
      'tr_TR': tr_TR,
      'pt_BR': pt_BR,
      'zh_TW': zh_TW,
      'es': es,
  };

  return language[code];
};

const withConfigProvider = (StoryFn: Function, context: StoryContext) => {
    const { direction, theme, language } = context.globals;
    switchMode(theme);
    const locale = getLocale(language);

    return (
        <ConfigProvider direction={direction} locale={locale}>
            <StoryFn />
        </ConfigProvider>
    );
};

export const decorators = [withConfigProvider];
